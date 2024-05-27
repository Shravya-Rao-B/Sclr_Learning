import {createContext,useState} from 'react';

export const PaginationContext = createContext();
export default function PaginationProvider(children) {
 const [pageSize, setPageSize] = useState(4);
const [pageNumber, setPageNumber] = useState(1);
const pageProps = {pageSize, setPageSize,pageNumber, setPageNumber};
  return (
    <div>PaginationContext</div>
  )
  export const usingPaginationContext = 
}