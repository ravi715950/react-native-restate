import { Card, FeaturedCard } from "@/components/Cards";
import Filters from "@/components/Filters";
import Search from "@/components/Search";
import icons from "@/constants/icons";
import { useGlobalContext } from "@/lib/global-provider";
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  const { user } = useGlobalContext();

  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="px-5 pb-20">
          <View className="flex flex-row items-center justify-between mt-5">
            <View className="flex flex-row">
              <Image
                source={{ uri: user?.avatar }}
                className="size-12 rounded-full"
              />

              <View className="flex flex-col items-start ml-2 justify-center">
                <Text className="text-xs font-rubik text-black-100">
                  Good Morning
                </Text>
                <Text className="text-base font-rubik-medium text-black-300">
                  {user?.name}
                </Text>
              </View>
            </View>
            <Image source={icons.bell} className="size-6" />
          </View>
          <Search />
          <View className="my-5">
            <View className="flex flex-row items-center justify-between">
              <Text className="text-xl font-rubik-bold text-black-300">
                Featured
              </Text>
              <TouchableOpacity>
                <Text className="text-base font-rubik-bold text-primary-300">
                  See all
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <FlatList
            data={[1, 2, 3, 4, 5]}
            renderItem={() => <FeaturedCard />}
            horizontal
            contentContainerClassName="gap-5"
            showsHorizontalScrollIndicator={false}
          />
          {/* <FeaturedCard /> */}
          <View className="mt-10 mb-5">
            <View className="flex flex-row items-center justify-between">
              <Text className="text-xl font-rubik-bold text-black-300">
                Our Recommendation
              </Text>
              <TouchableOpacity>
                <Text className="text-base font-rubik-bold text-primary-300">
                  See all
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <Filters />
          <FlatList
            data={[1, 2, 3, 4, 5, 6]}
            renderItem={() => <Card />}
            contentContainerClassName="px-2 pb-5"
            columnWrapperClassName="flex gap-2"
            showsVerticalScrollIndicator={false}
            numColumns={2}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
