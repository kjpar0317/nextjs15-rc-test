import { Checkbox } from "@/components/ui/checkbox";
import Label from "@/components/ui-custom/Label";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Select from "@/components/ui-custom/Select";
import Radio from "@/components/ui-custom/Radio";
import { Textarea } from "@/components/ui/textarea";
import RootWrapAnimation from "@/components/animation/RootWrapAnimation";
import TextAnimation from "@/components/animation/TextAnimation";
import RectAnimation from "@/components/animation/RectAnimation";

export default function FormTestPage() {
  return (
    <div className="w-full h-full flex mx-auto justify-center center">
      <RootWrapAnimation parallel>
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <Label htmlFor="terms">Accept terms and conditions</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Input type="email" placeholder="Email" />
        </div>
        <div className="flex items-center space-x-2">
          <Select
            className="w-[180px]"
            placeholder="Select a fruit"
            list={[]}
          />
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
        <div className="flex items-center space-x-2">
          <Textarea placeholder="test" />
        </div>
        <div>
          <Tabs defaultValue="account" className="w-[400px]">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              <Card>
                <CardHeader>
                  <CardTitle>Account</CardTitle>
                  <CardDescription>
                    <TextAnimation
                      text={
                        "Make changes to your account here. Click save when you are done."
                      }
                    />
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" defaultValue="Pedro Duarte" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="username">Username</Label>
                    <Input id="username" defaultValue="@peduarte" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save changes</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="password">
              <Card>
                <CardHeader>
                  <CardTitle>Password</CardTitle>
                  <CardDescription>
                    <TextAnimation
                      text={
                        "Change your password here. After saving, you will be logged out."
                      }
                    />
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="current">Current password</Label>
                    <Input id="current" type="password" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="new">New password</Label>
                    <Input id="new" type="password" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save password</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </RootWrapAnimation>
      <div>
        <RectAnimation>test</RectAnimation>
      </div>
    </div>
  );
}
