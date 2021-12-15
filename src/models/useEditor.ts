import { useState, useCallback } from 'react';
/**
 *
 * 回答问题编辑框 models
 */
export default function useAuthModel() {
  const [text, setText] = useState('');

  const edit = useCallback(
    (textline) => {
      // signin implementation
      // setUser(user from signin API)
      setText(textline);
    },
    [text],
  );

  // const signout = useCallback(() => {
  //   // signout implementation
  //   // setUser(null)
  // }, [])

  return {
    text,
    edit,
  };
}
