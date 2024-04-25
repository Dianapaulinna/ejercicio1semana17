



function lista(props) { // componente funcional
  return ( // codigo JSX
     <ul>
          <li>UCampers</li>
          { // codigo JS
              props.elementos.map( elem => {
                  return ( // codigo JSX
                      <li key={elem} style={{color: "white"}}>{elem}</li>
                  )
              })
          }
     </ul>
  )
}

export default lista

/* function lista(props) {
    return ( // codigo JSX
        <ul>
          {
            props.elementos.map( elem=> {
              return (
                <li style={{color: "white"}}>{elem}</li>
              )
            })
          }


        </ul>
    )
}

export default lista */
