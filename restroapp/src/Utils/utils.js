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

      localStorage.setItem(collectionName, JSON.stringify(documents));
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

export const handleAddItem = (item, quantity, setCart) => {
  setCart((prevState) => {
    if (quantity === 0) {
      delete prevState?.[item.itemId];
      return {
        ...prevState,
      };
    }
    return {
      ...prevState,
      [item.itemId]: { ...item, quantity: quantity },
    };
  });
};

export const handleAlterCart = (item, action, setCart, setCartTotal) => {
  if (action === "decrease") {
    setCart((prevState) => {
      if (
        prevState?.[item?.itemId]?.quantity &&
        prevState?.[item?.itemId]?.quantity <= 1
      ) {
        const { [item.itemId]: p, ...rest } = prevState;
        return rest;
      } else {
        return {
          ...prevState,
          [item.itemId]: {
            ...item,
            quantity: prevState?.[item?.itemId]?.quantity - 1,
          },
        };
      }
    });
  } else if (action === "increase") {
    setCart((prevState) => {
      return {
        ...prevState,
        [item.itemId]: {
          ...item,
          quantity: prevState?.[item?.itemId]?.quantity + 1,
        },
      };
    });
  }
};
