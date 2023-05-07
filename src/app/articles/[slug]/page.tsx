export default function Article({ params }: { params: { slug: string } }) {
  return (
    <div>
      <h1>
        <p>記事のスラッグ: {params.slug}</p>
      </h1>
    </div>
  );
}
