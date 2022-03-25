import React from 'react'

export const PageBreadcrumbs = ({page}) => {
  return (
    <nav aria-label="breadcrumb">
    <ol className="breadcrumb breadcrumbbg">
      <li className="breadcrumb-item"><a href="#">Home</a></li>
      <li className="breadcrumb-item active" aria-current="page">{page}</li>
      
    </ol>
  </nav>

  )
}
