import { SiMcdonalds } from 'react-icons/si';
import { GiElephantHead } from 'react-icons/gi';
import { FaPinterest } from 'react-icons/fa6';
import { SiNasa } from 'react-icons/si';
import { Card } from '../ui/card';

export default function SponsersPage() {
  return (
    <div className="flex flex-col space-y-2 items-center md:hidden  pb-8">
      <p>Our sponsors</p>
      <div className="grid gap-2 grid-cols-2">
        <Card className="rounded-lg p-8 flex items-center">
          <SiMcdonalds size={28}/>
        </Card>
        <Card className="rounded-lg p-8 flex items-center">
          <SiNasa size={28} />
        </Card>
        <Card className="rounded-lg p-8 flex items-center">
          <GiElephantHead  size={28}/>
        </Card>
        <Card className="rounded-lg p-8 flex items-center">
          <FaPinterest size={28} />
        </Card>
      </div>
    </div>
  );
}
