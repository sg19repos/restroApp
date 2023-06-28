import { collection, getDocs } from "firebase/firestore/lite";
import { firestore } from "../firebase";

export const getFireStoreElements = (collectionName) => {
  async function getDocuments(collectionPath) {
    try {
      const querySnapshot = await getDocs(
        collection(firestore, collectionPath)
      );

      const documents = [];
      querySnapshot.forEach((doc) => {
        documents.push(doc.data());
      });

      localStorage.setItem("menuItems", JSON.stringify(documents));
      return documents;
    } catch (error) {
      console.error("Error retrieving documents:", error);
      return [];
    }
  }

  const collectionPath = collectionName + "/";

  getDocuments(collectionPath)
    .then((documents) => {
      console.log("Documents:", documents);
      return documents;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
