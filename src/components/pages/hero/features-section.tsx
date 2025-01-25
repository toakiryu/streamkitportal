import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconShare,
} from "@tabler/icons-react";
import { lazyImport } from "@/components/lazyImport";
const SimpleWithHoverEffects = lazyImport(
  () => import("@/components/ui/simple-with-hover-effects")
);

export default function PageHeroFeaturesSection() {
  const features = [
    {
      title: "とても使いやすい",
      description:
        "専門的な知識を必要としないUIの操作でカスタマイズを作成できます。",
      icon: <IconEaseInOut />,
    },
    {
      title: "カスタマイズ",
      description:
        "UIのコントールに加えて直性コードを編集しながらのカスタマイズを可能にします。",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "限定的な共有",
      description:
        "シェアURLを共有することで、特定の人に自分のカスタマイズを共有できます。",
      icon: <IconShare />,
    },
    {
      title: "テンプレート",
      description:
        "作成したカスタマイズを登録することで、多くの人に貢献することが出来ます。",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "利用料金",
      description:
        "当サービスは寄付やサポートによって、完全無料で提供されています。",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "安定したサービス",
      description:
        "クラウドホスティングで、24時間365日年中無休でサービスの安全を確保しています。",
      icon: <IconCloud />,
    },
    {
      title: "サポート",
      description:
        "開発者に加え公認サポーターやコミュニティーの有識者がサポートをします。",
      icon: <IconHelp />,
    },
    {
      title: "意見",
      description:
        "当サービスが気に入ったら宣伝や拡散をお願いします。正直な意見を受け止めます。",
      icon: <IconHeart />,
    },
  ];
  return (
    <div id="features-section" className="container max-w-5xl">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <SimpleWithHoverEffects
            key={feature.title}
            {...feature}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
