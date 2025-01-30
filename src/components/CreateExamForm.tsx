import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { X } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CreateExamFormProps {
  onClose: () => void;
}

const CreateExamForm = ({ onClose }: CreateExamFormProps) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    theme: "",
    questionCount: "",
    duration: "",
    difficulty: "",
    references: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você implementaria a lógica para salvar a prova
    console.log("Form submitted:", formData);
    onClose();
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Criar Nova Prova</h2>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="title">Título da Prova</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="Ex: Fundamentos de Cibersegurança"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="theme">Tema</Label>
            <Select
              onValueChange={(value) => setFormData({ ...formData, theme: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecione um tema" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cybersecurity">Cibersegurança</SelectItem>
                <SelectItem value="programming">Programação</SelectItem>
                <SelectItem value="networks">Redes</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="questionCount">Quantidade de Questões</Label>
            <Input
              id="questionCount"
              type="number"
              value={formData.questionCount}
              onChange={(e) => setFormData({ ...formData, questionCount: e.target.value })}
              placeholder="Ex: 10"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="duration">Duração (minutos)</Label>
            <Input
              id="duration"
              type="number"
              value={formData.duration}
              onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
              placeholder="Ex: 60"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="difficulty">Nível de Dificuldade</Label>
            <Select
              onValueChange={(value) => setFormData({ ...formData, difficulty: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecione a dificuldade" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="beginner">Iniciante</SelectItem>
                <SelectItem value="intermediate">Intermediário</SelectItem>
                <SelectItem value="advanced">Avançado</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Descrição</Label>
          <Textarea
            id="description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="Descreva o objetivo e conteúdo da prova"
            rows={3}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="references">Documentos de Referência</Label>
          <Textarea
            id="references"
            value={formData.references}
            onChange={(e) => setFormData({ ...formData, references: e.target.value })}
            placeholder="Liste links ou documentos de referência para estudo"
            rows={2}
          />
        </div>

        <div className="flex justify-end gap-4">
          <Button variant="outline" onClick={onClose}>
            Cancelar
          </Button>
          <Button type="submit">
            Criar Prova
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateExamForm;