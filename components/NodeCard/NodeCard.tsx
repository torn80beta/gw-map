import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatDateString } from "@/lib/helpers/formatDate";
import { Phone } from "lucide-react";
import { Button } from "../ui/button";

interface Props {
  node: {
    _id: string;
    street: string;
    building: string;
    entrance: string;
    placement: string;
    description: string;
    tel1: string;
    comment1: string;
    tel2: string;
    comment2: string;
    gw: string;
    fibers: string;
    user: string;
    updatedAt: string;
  } | null;
  setIsEdit: any;
}

function NodeCard({ node, setIsEdit }: Props) {
  if (!node) {
    return null;
  }

  return (
    <section className="shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <Card>
        <CardHeader>
          <CardTitle>
            {`GW${node.gw}: ${node.street} ${node.building}`}
          </CardTitle>
          <CardDescription>{`Обновил ${node.user} ${formatDateString(
            node.updatedAt
          )}`}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Оборудование: {`${node.entrance}`} подъезд(ы).</p>
          <p>Расположение: {`${node.placement}`}</p>
        </CardContent>
        <CardContent>
          <p>{`${node.description}`}</p>
        </CardContent>
        {node.tel1 && (
          <CardContent className="">
            <a href={`tel:+380${node.tel1}`} className="flex row gap-2">
              <Phone />
              +38{`${node.tel1}`}
            </a>
            {`${node.comment1}`}
          </CardContent>
        )}
        {node.tel2 && (
          <CardContent className="">
            <a href={`tel:+380${node.tel2}`} className="flex row gap-2">
              <Phone />
              +38{`${node.tel2}`}
            </a>
            {`${node.comment2}`}
          </CardContent>
        )}
        <CardFooter>
          <Button
            variant="secondary"
            className="bg-emerald-500 hover:bg-emerald-300 w-full"
            onClick={() => setIsEdit(true)}
          >
            Edit
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
}

export default NodeCard;
