import React from "react";

function useLocalStorage (itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {   
    setTimeout(() => {
      try {
        const localStoreItem = localStorage.getItem(itemName)
      
        let parsedItem;
        
        if (!localStoreItem){
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        }else {
          parsedItem = JSON.parse(localStoreItem)
          setItem(parsedItem)
        }
    
        setLoading(false);
      } catch (error){
        setLoading(false);
        setError(true);
      }
      
    }, 2000);
  }, [initialValue, itemName]);


    const saveItem = (newItem) => {
     localStorage.setItem(itemName, JSON.stringify(newItem));
     setItem(newItem);
   };

   return {
    item, 
    saveItem, 
    loading, 
    error,
  };
  }

export { useLocalStorage }


// localStorage.removeItem('TODOS_V1')
// const defaultTodos = [
//     { text: 'Querer Stardew', completed: true},
//     { text: 'Comprar Stardew', completed: true},
//     { text: 'Jugar Stardew', completed: true},
//     { text: 'Comprar la mochila', completed: false}
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
