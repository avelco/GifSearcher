import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

export const GifSearcherApp = () => {

  const [categories, setCategories] = useState(['One Punch'])

  const onAddCategory = (newCategory) => {

    if ( categories.includes(newCategory) ) return;

    setCategories( [...categories, newCategory] )
    
  }

  return (
    <>

        <h2>GifSearcherApp</h2>

        <AddCategory 
          // setCategories={ setCategories }
          onNewCategory={ onAddCategory }
        />

		{ 
			categories.map( (category) => {
				return <GifGrid 
				key={ category }
				category={ category }/>
			}) 
		}
    </>
  )
}
