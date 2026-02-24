import {
  Container,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

function FormConfiguracoes() {
  return (
    <Container sx={{ mt: 4 }}>
      {/* Exemplo de Select (Menu suspenso) */}
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Curso Tecnico</InputLabel>
        <Select label="Departamento" value="">
          <MenuItem value={10}>Informatica</MenuItem>
          <MenuItem value={20}>Moda</MenuItem>
          <MenuItem value={30}>Segurança no Trabalho</MenuItem>
          <MenuItem value={40}>Meio Ambiente</MenuItem>
        </Select>
      </FormControl>

      {/* Exemplo de Radio Buttons (Escolha única) */}
      <FormControl>
        <FormLabel>Turno</FormLabel>
        <RadioGroup row>
          <FormControlLabel value="m" control={<Radio />} label="Manhã" />
          <FormControlLabel value="t" control={<Radio />} label="Tarde" />
          <FormControlLabel value="n" control={<Radio />} label="Noite" />
          <FormControlLabel value="i" control={<Radio />} label="Integral" />
        </RadioGroup>
      </FormControl>
    </Container>
  );
}

export default FormConfiguracoes;
