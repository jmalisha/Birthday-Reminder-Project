import React from 'react'

const List = ({people}) => {
  return (
    <>
      {people.map((person)=>{
        const {name,id,image,age}= person
        return (
          <article key={id}>
            <img src={image} alt={name}/>
            <div>
              <h3>{name}</h3>
              <p>{age} years</p>
            </div>
          </article>
        )
      })}
    </>
  )
}

export default List
