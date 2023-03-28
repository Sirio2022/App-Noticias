import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import useNoticias from '../hooks/UseNoticias';
import Noticia from './Noticia';

export default function ListadoNoticias() {
  const { noticias } = useNoticias();
  console.log(noticias);
  return (
    <>
      <Typography textAlign={'center'} marginY={5} component="h2" variant="h3">
        Últimas noticias
      </Typography>

      <Grid 
        container
        spacing={2}
      >
        {noticias.map((noticia) => (
          <Noticia key={noticia.url} noticia={noticia} />
        ))}
      </Grid>
    </>
  );
}
