import { Product } from "../types/product"

interface ListProps {
    data: Product
    className?: string
    selectedIndex?: number
    index?: number
    handleSearchClick: (value: string) => void
}

const ListItem = (props: ListProps) => {
    const { className, selectedIndex, index, handleSearchClick } =props
    const { title } = props.data
    
    return (
        <li 
        className={`p-2 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer ${selectedIndex === index ? "bg-gray-300 dark:bg-gray-500" : ""} ${className}`}
        onClick={()=> handleSearchClick(title)}
        >{title}</li>
    )
}

export default ListItem