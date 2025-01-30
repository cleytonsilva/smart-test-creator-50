interface CertificateProps {
  score: number;
  totalQuestions: number;
}

const Certificate = ({ score, totalQuestions }: CertificateProps) => {
  return (
    <div className="border-8 border-double border-primary/20 p-8 rounded-lg bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="text-center">
        <h3 className="text-2xl font-serif mb-4">Certificado de Conclusão</h3>
        <p className="text-lg mb-2">Este certificado é conferido a</p>
        <p className="text-xl font-semibold mb-4">[Nome do Usuário]</p>
        <p className="text-lg mb-4">
          por completar com sucesso a avaliação com {score} de {totalQuestions} questões corretas
        </p>
        <div className="text-sm text-gray-500">
          Data: {new Date().toLocaleDateString()}
        </div>
      </div>
    </div>
  );
};

export default Certificate;