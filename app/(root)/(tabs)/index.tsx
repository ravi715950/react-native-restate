import { useGlobalContext } from "@/lib/global-provider";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  const { user } = useGlobalContext();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-3xl font-bold font-rubik mb-10 text-danger">
        Welcome {user?.name || "User"}
      </Text>
      <Link href="/sign-in">Sign In</Link>
      <Link href="/explore">Explore</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/properties/4">Property</Link>
    </View>
  );
}
