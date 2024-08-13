import { useSuiClientQuery } from "@mysten/dapp-kit";
import type { SuiObjectData } from "@mysten/sui.js/client";

export function QueryObject({ id }: { id: string }) {
   // 使用useSuiClientQuery钩子来获取对象的详细信息
   const { data, isPending, error } = useSuiClientQuery('getObject', {
    id: id,
    options: {
      showContent: true,  // 设置true来显示对象详细信息
    },
  });

  // 如果数据仍在加载
  if (isPending) return <div>Loading object information...</div>;

  // 如果加载出现了错误
  if (error) return <div>An error occurred: {error.message}</div>;

  // 如果没有查询到数据
  if (!data || !data.data) return <div>No object data found.</div>;

  // 用于渲染对象信息的辅助函数
  const renderObjectData = (objectData: SuiObjectData | { [s: string]: unknown; } | ArrayLike<unknown>) => {
    return Object.entries(objectData).map(([key, value], index) => (
      <li key={index}>{`${key}: ${JSON.stringify(value)}`}</li>
    ));
  };

  // 展示本次交易obeject中的内容。
  return (
    <div>
      <h3>Object Details:</h3>
      <ul>
        {renderObjectData(data.data)}
      </ul>
    </div>
  );
}