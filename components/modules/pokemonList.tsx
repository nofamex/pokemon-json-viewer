import { Card, CardContent } from "@/components/ui/card";
import { JSONTree } from "react-json-tree";

interface Props {
  data: any;
}

const PokemonList: React.FC<Props> = ({ data }) => {
  return (
    <Card className="w-full bg-transparent">
      <JSONTree data={data} />
    </Card>
  );
};

export default PokemonList;
