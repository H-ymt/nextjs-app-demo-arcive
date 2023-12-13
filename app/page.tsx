export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <a href={process.env.NEXT_PUBLIC_CLERK_USER_PROFILE as string} target="_blank">
        アカウント設定
      </a>
    </div>
  );
}
