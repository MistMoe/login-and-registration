import SplashCursor from './SplashCursor'
import PrismaticBurst from './PrismaticBurst'
import AuthPage from './AuthPage'

function App() {
  return (
    <div>
      {/* 鼠标流体特效 */}
      <SplashCursor
        DENSITY_DISSIPATION={3.5}
        VELOCITY_DISSIPATION={2}
        PRESSURE={0.1}
        CURL={3}
        SPLAT_RADIUS={0.2}
        SPLAT_FORCE={6000}
        COLOR_UPDATE_SPEED={10}
        RAINBOW_MODE={false}
        COLOR="#A855F7"
      />

      {/* 全屏背景 */}
      <div style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0, background: '#0a0a0a' }}>
        <PrismaticBurst
          animationType="rotate3d"
          color0="#A855F7"
          color1="#7C3AED"
          color2="#6366F1"
          colors={['#A855F7', '#7C3AED', '#6366F1']}
          mixBlendMode="lighten"
          intensity={2}
          speed={0.5}
        />
      </div>

      {/* 登录 / 注册卡片 */}
      <AuthPage />
    </div>
  )
}

export default App
