import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY as string | undefined,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN as string | undefined,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID as string | undefined,
  appId: import.meta.env.VITE_FIREBASE_APP_ID as string | undefined,
};

function hasConfig(cfg: typeof firebaseConfig): cfg is Required<typeof firebaseConfig> {
  return !!(cfg.apiKey && cfg.authDomain && cfg.projectId && cfg.appId);
}

let app: FirebaseApp | null = null;
let auth: Auth | null = null;

if (hasConfig(firebaseConfig)) {
  app = getApps().length ? getApps()[0]! : initializeApp(firebaseConfig);
  auth = getAuth(app);
}

export { app, auth };
export function getFirebaseAuthOrNull() {
  return auth;
}
