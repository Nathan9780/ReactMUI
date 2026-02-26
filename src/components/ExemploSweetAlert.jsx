import Swal from 'sweetalert2'
import React from 'react'

function ExemploSweetAlert() {
  return (
   Swal.fire({
  title: 'Tem certeza?',
  text: "Você não poderá reverter isso!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Sim, deletar!'
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire('Deletado!', 'O arquivo foi deletado.', 'success')
  }
})

  )
}

export default ExemploSweetAlert

