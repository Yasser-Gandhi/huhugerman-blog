import Layout from "../../components/Layout";

export default function primerPost({data}) {

  return (
    <Layout>
      <h2>{data.id} - {data.title}</h2>
      <p>{data.body}</p>
    </Layout>
  );
}

export async function getStaticPaths() {
  try{
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    const paths = data.map(({id}) => ({params: {id: id.toString()}}));

    return { 
      paths, 
      fallback: false 
    };
  }catch(err){
    console.log(err);
  }
}

export async function getStaticProps({params}) {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const data = await res.json();

    return {
      props: {
        data,
      },
    };
  }catch(err){
    console.log(err)
  }
}