import React from "react";

import {
  Container,
  Typography,
  TextField,
  Stack,
  Button,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  Paper,
  Grid,
} from "@mui/material";

// Importações dos arquivos JSON internos
import { categoriasDisponiveis } from "/src/Dados/dataCliente.js";
import { clientesIniciais } from "/src/Dados/dadosCliente.js";

function CadastrodeCliente() {
  // 1. ESTADOS (Memória)
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [estado, setEstado] = React.useState("");
  // Criamos uma lista na memória que começa com os dados do arquivo
  const [listaClientes, setListaClientes] = React.useState(clientesIniciais);

  // 2. FUNÇÕES DE MANIPULAÇÃO (Handlers)
  function mudarNome(event) {
    setNome(event.target.value);
  }

  function mudarCategoria(event) {
    setCategoria(event.target.value);
  }

  function adicionarProduto() {
    // Criamos um novo objeto com os dados digitados
    const novoItem = {
      id: Math.random(), // Gera um ID temporário
      nome: nome,
        email: email,
          estado: estado,
    };

    // Adicionamos o novo item à lista existente
    // Usamos o padrão de "espalhar" os itens antigos e somar o novo
    setListaClientes([...listaClientes, novoItem]);

    // Limpamos os campos após salvar
    setNome("");
    setEmail("");
    setEstado("");
  }

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Grid container spacing={4}>
        {/* COLUNA 1: FORMULÁRIO DE CADASTRO */}
        <Grid item xs={12} md={5}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Cadastrar Novo Cliente
            </Typography>
            <Stack spacing={2}>
              <TextField
                label="Nome do Cliente"
                value={nome}
                onChange={mudarNome}
                fullWidth
              />
              <TextField
                label="Email do Cliente"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                fullWidth
              />
              <TextField
                label="Estado do Cliente"
                value={estado}
                onChange={(event) => setEstado(event.target.value)}
                fullWidth
              />

              <Button
                variant="contained"
                onClick={adicionarProduto}
                disabled={nome === "" || email === "" || estado === ""}
              >
                Adicionar à Lista
              </Button>
            </Stack>
          </Paper>
        </Grid>

        {/* COLUNA 2: LISTA DE PRODUTOS CADASTRADOS */}
        <Grid item xs={12} md={7}>
          <Typography variant="h6" gutterBottom>
            Produtos no Sistema
          </Typography>
          <Paper sx={{ maxHeight: 400, overflow: "auto" }}>
            <List>
              {listaClientes.map(function (prod) {
                return (
                  <React.Fragment key={prod.id}>
                    <ListItem>
                      <ListItemText
                        primary={prod.nome}
                        secondary={"Email: " + prod.email + " | Estado: " + prod.estado}
                      />
                    </ListItem>
                    <Divider />
                  </React.Fragment>
                );
              })}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default CadastrodeCliente;
