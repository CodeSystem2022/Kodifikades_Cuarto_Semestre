export function Container({ children, className }) {
  return (
    <div className={"max-w-7 px-4 mx-auto " + className}>{children}</div>
  );
}

export default Container;

//ARCHIVO REVISADO -VIDEO 7 - FUNCIONANDO