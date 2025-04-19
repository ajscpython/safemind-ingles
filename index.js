import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="container">
      <div style={{ textAlign: 'center' }}>
        <Image src="/logo-safemind.jpeg" alt="Logo Safemind" width={150} height={150} />
        <h1>Safemind-Inglês</h1>
        <p><strong>Aprenda inglês com a metodologia que transforma pensamento em resultado.</strong></p>
        <Link href="/area-do-aluno"><button>Acessar Plataforma</button></Link>
      </div>
      <nav style={{ marginTop: 20 }}>
        <Link href="/sobre">Sobre o Curso</Link> |{" "}
        <Link href="/contato">Contato</Link>
      </nav>
    </div>
  );
}
