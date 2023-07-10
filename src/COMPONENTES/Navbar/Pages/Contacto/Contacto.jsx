import "./contacto.css"

const contacto = () => {
  return (
    <>
        <h1> contacto </h1>
        <p>  te dejamos este formulario para que puedas dejarnos tus consultas y te vamos a contestar lo antes posible </p>

        <div className="flex-conteiner">
  <form className="form">
    <div className="form__selection">
      <h2>Email</h2>&gt;                
      <input type="text" className="form__input" />
    </div>
    <div className="form__selection">
      <h2>Nombre</h2>
      <input type="text" className="form__input" />
    </div>
    <div className="form__textarea">
      <h2>Mensaje</h2>
      <textarea type="text" className="form__input" defaultValue={""} />
    </div>
    <div className="form__button"> 
      <input type="submit" defaultValue="enviar formulario" className="boton" />
    </div>
  </form>
  <div className="form__image">
    <img src="https://cdn-icons-png.flaticon.com/512/20/20173.png" />
  </div>
</div>

    </>
  )
}

export default contacto