import Head from "next/head";

interface IProps {
  title?: string;
  description?: string;
}

const DEFAULT_TITLE = "LazyCanvas";
const DEFAULT_DESC =
  "LazyCanvas is designed specifically to simplify interaction with canvas, and reduce development time with available functionality.";

export function HeadingMeta(props: IProps) {
  const { title = DEFAULT_TITLE, description = DEFAULT_DESC } = props;

  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
      <link rel="icon" href="/icon.jpg" type="image/jpeg" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="canvas,node-canvas,javascript,typescript,image-generation"
      />
      <meta name="theme-color" content="#ff8a8a" />
    </Head>
  );
}
