import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Heart, Repeat } from "lucide-react";

const mockTweets = [
  {
    id: 1,
    text: "Much wow! Dogecoin is more than just a meme - it's a revolution in digital payments! 🚀🐕 #Dogecoin #Crypto",
    author: "@DogeArmy",
    likes: 1200,
    retweets: 450,
  },
  {
    id: 2,
    text: "Remember: 1 DOGE = 1 DOGE. Stay strong, stay together! 💎🐾 #DogeCommunity",
    author: "@DogeSupport",
    likes: 890,
    retweets: 320,
  },
  {
    id: 3,
    text: "New merchants accepting $DOGE every day! The future is bright for our favorite crypto! 🌟 #DogeAdoption",
    author: "@DogeFans",
    likes: 750,
    retweets: 280,
  },
];

export const XFeed = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Latest from <span className="text-gradient">X</span>
        </h2>
        
        <div className="grid gap-6 max-w-3xl mx-auto">
          {mockTweets.map((tweet) => (
            <Card key={tweet.id} className="backdrop-blur-sm bg-white/10">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <p className="font-semibold text-sm text-gray-400 mb-2">{tweet.author}</p>
                    <p className="text-lg mb-4">{tweet.text}</p>
                    <div className="flex items-center gap-6 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <MessageSquare className="w-4 h-4" />
                        <span>24</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Repeat className="w-4 h-4" />
                        <span>{tweet.retweets}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Heart className="w-4 h-4" />
                        <span>{tweet.likes}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};