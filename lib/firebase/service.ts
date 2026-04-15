import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "./config";

export const useGetDocument = (collectionName: string) => {
  const [data, getData] = useState<Array<any>>([]);
  useEffect(() => {
    const q = query(collection(db, collectionName), orderBy("createdAt"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let data: Array<any> = [];
      querySnapshot.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
      });
      getData(data);
    });
    return () => unsubscribe();
  }, [collectionName]);
  return data;
};
export const addDocument = (collectionName: string, data: any) => {
  const filterdata = JSON.parse(JSON.stringify(data));
  addDoc(collection(db, collectionName), {
    ...filterdata,
    createdAt: serverTimestamp(),
  });
};
export const deleteDocument = async (collectionName: string, id: string) => {
  await deleteDoc(doc(db, collectionName, id));
};
export const deleteAllDocument = async (collectionName: string) => {
  await deleteDoc(doc(db, collectionName));
};
export const updateDocument = async (
  collectionName: string,
  id: string,
  data: any
) => {
  const filterdata = JSON.parse(JSON.stringify(data));
  await updateDoc(doc(db, collectionName, id), {
    ...filterdata,
  });
};
