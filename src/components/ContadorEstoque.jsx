import React from "react";
import { Button, Typography, Container } from "@mui/material";
import Swal from 'sweetalert2';
import 'sweetalert2/themes/bulma.css'


function ContadorEstoque() {
  // Criando o estado
  const [quantidade, setQuantidade] = React.useState(0);

  // Função convencional para aumentar
  function adicionarItem() {
    setQuantidade(quantidade + 1);
  }

  // Função convencional para diminuir com logica if/else
  function removerItem() {
    if (quantidade > 0) {
      setQuantidade(quantidade - 1);
    } else {
     Swal.fire({
  icon: "question",
  title: "Por que?",
  theme: 'bulma-dark',
  text: "Não é possivel deixar o carrinho com quantidade negativa",
  confirmButtonText: "Desculpa, não farei mais " ,
  showCancelButton: true,
  cancelButtonText: "Não vou desistir do meu carrinho!",
  cancelButtonColor:  "#87adbd",
  confirmButtonColor: "#f9fafa",
  
})
.then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
      title: "Perdoado!✅",
      text: "Espero que não se repita",
      icon: "success",
      theme: 'bulma-light',

    });
  }
});
    }
  }

  return (
    <Container>
      <Typography variant="h4">Itens no Carrinho: {quantidade}</Typography>
      <Button variant="contained" onClick={adicionarItem} sx={{ mr: 2 }}>
        {" "}
        +{" "}
      </Button>
      <Button variant="outlined" color="error" onClick={removerItem}>
        {" "}
        -{" "}
      </Button>
    </Container>
  );
}

export default ContadorEstoque;
