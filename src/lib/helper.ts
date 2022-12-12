export function getFromLocalStorage(key: string): string | null {
  if (typeof window !== 'undefined') {
    return window.localStorage.getItem(key);
  }
  return null;
}

export function getFromSessionStorage(key: string): string | null {
  if (typeof sessionStorage !== 'undefined') {
    return sessionStorage.getItem(key);
  }
  return null;
}

// export const useLocalStorage = (key: any, defaultValue: any) => {
//   const [value, setValue] = useState(() => {
//     let currentValue;

//     try {
//       currentValue = JSON.parse(
//         localStorage.getItem(key) || String(defaultValue)
//       );
//     } catch (error) {
//       currentValue = defaultValue;
//     }

//     return currentValue;
//   });

//   useEffect(() => {
//     localStorage.setItem(key, JSON.stringify(value));
//   }, [value, key]);

//   return [value, setValue];
// };
