import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function App() {
  return (
    <div className="min-h-svh bg-background flex items-center justify-center p-8">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">Recipes</CardTitle>
          <CardDescription>
            Write, save, and browse your own recipes.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-md border border-dashed p-8 text-center space-y-2">
            <p className="text-sm font-medium">No recipes yet</p>
            <p className="text-sm text-muted-foreground">
              Add your first recipe to get started.
            </p>
          </div>

          <Button className="w-full" disabled>
            New recipe
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
