import { Checkbox } from "@/components/ui/checkbox";
import Label from "@/components/ui/custom/Label";
import { Input } from "@/components/ui/input";
import Select from "@/components/ui/custom/Select";
import Radio from "@/components/ui/custom/Radio";

export default function FormTestPage() {
  return (
    <>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Input type="email" placeholder="Email" />
      </div>
      <div className="flex items-center space-x-2">
        <Select className="w-[180px]" placeholder="Select a fruit" list={[]} />
      </div>
      <div className="flex items-center space-x-2">
        <Radio
          orientation="horizontal"
          list={[
            {
              code: "test1",
              value: "선택1",
            },
            {
              code: "test2",
              value: "선택2",
            },
          ]}
        />
      </div>
    </>
  );
}
