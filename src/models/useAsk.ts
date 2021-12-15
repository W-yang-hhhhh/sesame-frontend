import { useState, useCallback } from 'react';
/**
 *
 * 回答问题编辑框 models
 */
export default function useAuthModel() {
  const [show, setShow] = useState(false);

  const modelaction = useCallback(
    (boolean) => {
      // signin implementation
      // setUser(user from signin API)
      setShow(boolean);
    },
    [show],
  );

  // const signout = useCallback(() => {
  //   // signout implementation
  //   // setUser(null)
  // }, [])

  return {
    show,
    modelaction,
  };
}
