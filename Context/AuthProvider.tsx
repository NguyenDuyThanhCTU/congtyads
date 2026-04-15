import { notification } from "antd";
import {
  getAdditionalUserInfo,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useRouter } from "next/router";
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../lib/firebase/config";
import { addDocument } from "../lib/firebase/service";

interface Props {
  children: React.ReactNode;
}
export type UserContextType = {
  user: any;
  setUser: (user: any) => void;
  googleSignIn: () => void;
  LogOut: () => void;
};
export const AuthContext = createContext<UserContextType>({
  user: {},
  setUser: (user: any) => {},
  googleSignIn: () => {},
  LogOut: () => {},
});
export const AuthProvider: React.FC<Props> = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState<any>({});
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser);
    });
    return () => {
      unsubscribe();
    };
  }, [router]);
  const googleSignIn = async () => {
    const GoogleProvider = new GoogleAuthProvider();
    const result: any = await signInWithPopup(auth, GoogleProvider);
    const { isNewUser }: any = getAdditionalUserInfo(result);
    if (isNewUser) {
      addDocument("users", {
        displayName: result.user?.displayName,
        email: result.user?.email,
        phoneNumber: result.user?.phoneNumber,
        photoURL: result.user?.photoURL,
        admin: false,
      });
    }
    router.push("/");
    notification["success"]({
      message: "Đăng nhập thành công !",
      description: `Chào mừng đến với ${window.location.hostname} !`,
    });
  };
  const LogOut = () => {
    signOut(auth);
    router.push("/login");
    notification["warning"]({
      message: "Đã đăng xuất !",
      description: `Bạn đã đăng xuất khỏi ${window.location.hostname} !`,
    });
  };
  return (
    <AuthContext.Provider value={{ user, setUser, googleSignIn, LogOut }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
