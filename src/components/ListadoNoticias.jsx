import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import useNoticias from '../hooks/UseNoticias';
import Noticia from './Noticia';

export default function ListadoNoticias() {
  const { noticias, totalNoticias, handleChangePagina, pagina } = useNoticias();

  const totalPaginas = Math.ceil(totalNoticias / 20);

  return (
    <>
      <Typography textAlign={'center'} marginY={5} component="h2" variant="h3">
        Últimas noticias
      </Typography>

      <Grid container spacing={2}>
        {noticias.map((noticia) => (
          <Noticia key={noticia.url} noticia={noticia} />
        ))}
      </Grid>

      <Stack
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
        marginY={5}
      >
        <Pagination
          page={pagina}
          count={totalPaginas}
          color="primary"
          onChange={handleChangePagina}
        />
      </Stack>
    </>
  );
}
