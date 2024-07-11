import React, { startTransition } from 'react'
import { useState } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { ICategory } from '@/lib/database/models/category.models'
import { Input } from '../ui/input'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  

type DropdownProps = {
    value?: string,
    onChangeHandler: () => void,

}

const Dropdown = ({ value, onChangeHandler }: DropdownProps) => {

    const [categories, setcategories] = useState<ICategory[]>([

        // adding the categories here dyanmically also

        {_id: '1', name: 'category 1'},
        {_id: '2', name: 'category 2'},
        {_id: '3', name: 'category 3'},
    ])
    
    const [NewCategory, setNewCategory] = useState('');

    const handleAddCategory = ()=> {
        
    }

    return (
        <Select onValueChange={onChangeHandler} defaultValue= {value}>
            <SelectTrigger className="select-field">
                <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
                {categories.length > 0 && categories.map((category)=> (

                    <SelectItem key={category._id} value={category._id} className='select-item p-regular-14'>

                        {category.name}
                        
                        </SelectItem>
                        
                ))}

                <AlertDialog>
                <AlertDialogTrigger className='p-medium-14 flex w-full rounded-sm py-3 pl-8 text-primary-500 hover:bg-primary-50 focus:text-primary-500'>Open</AlertDialogTrigger>
                <AlertDialogContent className='bg-white'>
                    <AlertDialogHeader>
                    <AlertDialogTitle>New Category</AlertDialogTitle>
                    <AlertDialogDescription>
                        <Input type="text"  placeholder = "Category name" className="input-field mt-3"
                        onChange={(e)=> setNewCategory(e.target.value)}
                        />
                    </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={()=> startTransition(handleAddCategory)}>Add</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
                </AlertDialog>

            </SelectContent>
        </Select>

    )
}

export default Dropdown
