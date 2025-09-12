import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getFirebaseAuthOrNull } from "@/lib/firebase";
import {
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  User,
  getIdTokenResult,
} from "firebase/auth";

export type Role = "student" | "admin";

interface AuthContextValue {
  user: User | null;
  role: Role | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  refreshRole: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [role, setRole] = useState<Role | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getFirebaseAuthOrNull();
    if (!auth) {
      // Firebase not configured — keep app functional but unauthenticated
      setUser(null);
      setRole(null);
      setLoading(false);
      return;
    }

    const unsub = onAuthStateChanged(auth, async (u) => {
      setUser(u);
      if (u) {
        const token = await getIdTokenResult(u);
        const claimRole = (token.claims["role"] as Role | undefined) || null;
        setRole(claimRole ?? "student");
      } else {
        setRole(null);
      }
      setLoading(false);
    });
    return () => unsub();
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      role,
      loading,
      async login(email: string, password: string) {
        const auth = getFirebaseAuthOrNull();
        if (!auth) throw new Error("Firebase is not configured. Please set environment variables for Firebase.");
        await signInWithEmailAndPassword(auth, email, password);
      },
      async signup(email: string, password: string) {
        const auth = getFirebaseAuthOrNull();
        if (!auth) throw new Error("Firebase is not configured. Please set environment variables for Firebase.");
        await createUserWithEmailAndPassword(auth, email, password);
      },
      async logout() {
        const auth = getFirebaseAuthOrNull();
        if (!auth) return;
        await signOut(auth);
      },
      async refreshRole() {
        const auth = getFirebaseAuthOrNull();
        if (auth?.currentUser) {
          const token = await getIdTokenResult(auth.currentUser, true);
          const claimRole = (token.claims["role"] as Role | undefined) || null;
          setRole(claimRole ?? "student");
        }
      },
    }),
    [user, role, loading],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
