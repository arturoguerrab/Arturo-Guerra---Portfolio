import React from 'react'

const ResetForm = ({handleState}) => {
  return (
    <div className="flex flex-col w-full gap-5">
					<span>Deseas enviar otro mensaje?</span>
					<button onClick={handleState}>REINICIAR</button>
	</div>
  )
}

export default ResetForm