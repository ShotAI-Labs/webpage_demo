"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, ArrowRight, Users, Code, Lightbulb, Menu, X } from "lucide-react"
import { motion } from "framer-motion"
import GlowingCard from "@/components/glowing-card"
import FloatingElement from "@/components/floating-element"
import ThemeToggle from "@/components/theme-toggle"
import { useState, useRef } from "react"

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlayPause = () => {
    const video = videoRef.current
    if (!video) return
    if (isPlaying) {
      video.pause()
    } else {
      video.play()
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* 导航栏 */}
      <header className="container mx-auto py-4 px-4 relative z-10">
        <motion.nav
          className="flex items-center justify-between relative"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/openshot.png"
              alt="Openshot"
              width={120}
              height={40}
              className="h-8 md:h-10 w-auto"
            />
          </Link>
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              首页
            </Link>
            <Link href="#features" className="text-foreground hover:text-primary transition-colors">
              选择我们
            </Link>
            <Link href="#about" className="text-foreground hover:text-primary transition-colors">
              关于我们
            </Link>
            <Link href="#contact" className="text-foreground hover:text-primary transition-colors">
              联系我们
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button variant="gradient" className="rounded-full px-4 md:px-6 hidden md:flex">
              加入等待名单 <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </motion.nav>
        
        {/* 移动端菜单 */}
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="container mx-auto py-4 px-4 flex flex-col gap-4">
              <Link
                href="/"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                首页
              </Link>
              <Link
                href="#features"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                选择我们
              </Link>
              <Link
                href="#about"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                关于我们
              </Link>
              <Link
                href="#contact"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                联系我们
              </Link>
              <Button variant="gradient" className="w-full rounded-full">
                加入等待名单 <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        )}
      </header>

      {/* 产品标签 */}
      <div className="container mx-auto mt-16 px-4 text-center relative z-10">
        <motion.div
          className="inline-flex items-center gap-2 bg-background/30 border border-primary/20 rounded-full px-4 py-2 mb-8 backdrop-blur-sm"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-gradient-to-r from-purple-600 to-blue-500 rounded-full px-2 py-1 text-xs text-white">
            新品
          </div>
          <span className="text-sm">ShotAI v1.0 - 一键剪辑、同步和美化您的视频素材</span>
        </motion.div>

        {/* 主标题 */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-300 to-blue-400 bg-clip-text text-transparent leading-tight max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          仅需对话，剪辑更快速，创意无极限
        </motion.h1>

        <motion.p
          className="text-primary mt-8 text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          开源智境开发的 ShotAI 是全球首个基于 AI Agent 的个性化智能视频剪辑助手
        </motion.p>

        {/* 按钮组 */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <Button variant="gradient" className="rounded-full px-8 py-6 text-lg w-full sm:w-auto">
            加入等待名单
          </Button>
        </motion.div>

        {/* 社交媒体图标 - 只保留GitHub */}
        <motion.div
          className="flex justify-center gap-6 mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1 }}
        >
          <Link href="https://github.com/ShotAI-Labs" className="text-foreground/70 hover:text-foreground transition-colors">
            <Github className="h-6 w-6" />
          </Link>
        </motion.div>
      </div>

      {/* 产品截图 */}
      <div className="container mx-auto mt-24 px-4 relative z-10">
        <FloatingElement delay={0.2} className="max-w-5xl mx-auto">
          <div className="relative rounded-xl overflow-hidden border border-primary/30 shadow-2xl shadow-purple-500/20 dark:shadow-purple-500/10">
            <div className="absolute top-0 left-0 right-0 h-6 bg-background/80 backdrop-blur-md flex items-center gap-1.5 px-4 z-10">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <Image
              src="/images/UI.png"
              alt="ShotAI 产品界面"
              width={1280}
              height={720}
              className="w-full object-cover border-t border-primary/20"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                ShotAI 剪辑，一键生成专业效果
              </h3>
            </div>
          </div>
        </FloatingElement>
      </div>

      {/* 视频演示 */}
      <div className="container mx-auto mt-16 px-4 relative z-10">
        <div
          className="relative rounded-xl overflow-hidden aspect-video max-w-4xl mx-auto border border-primary/30 shadow-2xl shadow-purple-500/20 dark:shadow-purple-500/10"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-500/20 z-10"></div>
          {(!isPlaying || (isPlaying && isHovered)) && (
            <button
              onClick={handlePlayPause}
              className="absolute inset-0 flex items-center justify-center z-20 focus:outline-none"
              style={{ pointerEvents: "auto" }}
              aria-label={isPlaying ? "暂停" : "播放"}
            >
              {isPlaying ? (
                // 暂停图标
                <span className="rounded-full w-20 h-20 bg-white/90 dark:bg-black/70 text-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/30 hover:scale-105 transition-transform">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="10" y="10" width="6" height="20" rx="2" fill="currentColor" />
                    <rect x="24" y="10" width="6" height="20" rx="2" fill="currentColor" />
                  </svg>
                </span>
              ) : (
                // 播放图标
                <span className="rounded-full w-20 h-20 bg-white/90 dark:bg-black/70 text-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/30 hover:scale-105 transition-transform">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="14,10 30,20 14,30" fill="currentColor" />
                  </svg>
                </span>
              )}
            </button>
          )}
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            poster="/images/demo.png"
            controls
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            style={{ zIndex: 0 }}
          >
            <source src="/videos/demo.mp4" type="video/mp4" />
            您的浏览器不支持视频标签。
          </video>
        </div>
        <motion.div
          className="text-center mt-4 text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.2 }}
          viewport={{ once: true }}
        >
          <p>观看演示视频，了解 ShotAI 如何通过 AI 技术革新视频剪辑流程</p>
        </motion.div>
      </div>

      {/* 特点部分 */}
      <div id="features" className="container mx-auto mt-32 px-4 relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          为什么选择 ShotAI？
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          <FloatingElement delay={0.2}>
            <GlowingCard>
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center mb-4 shadow-lg shadow-purple-500/30 dark:shadow-purple-500/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                智能剪辑
              </h3>
              <p className="text-muted-foreground">
                通过简单的文字提示，AI 自动识别并剪辑视频中的关键内容，省去繁琐的手动操作
              </p>
            </GlowingCard>
          </FloatingElement>

          <FloatingElement delay={0.4}>
            <GlowingCard>
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center mb-4 shadow-lg shadow-purple-500/30 dark:shadow-purple-500/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                节省时间
              </h3>
              <p className="text-muted-foreground">
                将传统需要数小时的视频编辑工作缩短至几分钟，让您专注于创意而非技术细节
              </p>
            </GlowingCard>
          </FloatingElement>

          <FloatingElement delay={0.6}>
            <GlowingCard>
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center mb-4 shadow-lg shadow-purple-500/30 dark:shadow-purple-500/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                创意增强
              </h3>
              <p className="text-muted-foreground">
                AI 提供创意建议和风格选项，帮助您打造专业级视频效果，即使没有专业技能，也能做出爆款 Vlog
              </p>
            </GlowingCard>
          </FloatingElement>
        </div>
      </div>

      {/* 使用流程 */}
      <div className="container mx-auto mt-32 px-4 relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          简单三步，开始智能剪辑
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <FloatingElement delay={0.2}>
            <GlowingCard className="h-full">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-purple-500/30 dark:shadow-purple-500/10">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                1. 注册账号
              </h3>
              <p className="text-muted-foreground text-center">创建您的智影剪辑账号，获取免费试用额度（敬请期待）</p>
              <div className="text-center">
                <Button variant="link" className="text-primary hover:text-primary/80 mt-4">
                  立即注册 <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </GlowingCard>
          </FloatingElement>

          <FloatingElement delay={0.4}>
            <GlowingCard className="h-full">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-purple-500/30 dark:shadow-purple-500/10">
                <Code className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                2. 上传视频
              </h3>
              <p className="text-muted-foreground text-center">上传您需要编辑的视频文件到我们的云端平台</p>
              <div className="text-center">
                <Button variant="link" className="text-primary hover:text-primary/80 mt-4">
                  了解更多 <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </GlowingCard>
          </FloatingElement>

          <FloatingElement delay={0.6}>
            <GlowingCard className="h-full">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-purple-500/30 dark:shadow-purple-500/10">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                3. 输入提示
              </h3>
              <p className="text-muted-foreground text-center">用自然语言描述您想要的编辑效果，AI将自动完成剪辑</p>
              <div className="text-center">
                <Button variant="link" className="text-primary hover:text-primary/80 mt-4">
                  查看示例 <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </GlowingCard>
          </FloatingElement>
        </div>
      </div>

      {/* 关于我们 */}
      <div id="about" className="container mx-auto mt-32 px-4 relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          关于开源智境
        </motion.h2>
        <motion.p
          className="text-muted-foreground max-w-3xl mx-auto text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          开源智境是一家致力于用人工智能革新视频创作的科技公司。我们的使命是让每个人都能轻松创作出专业水准的视频内容，
          无需复杂的技术学习。通过结合最先进的AI技术与直观的用户体验，我们正在重新定义视频剪辑的未来
        </motion.p>
      </div>

      {/* 团队成员 */}
      <div className="container mx-auto mt-32 px-4 relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          我们的团队
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <FloatingElement delay={0.2}>
            <div className="bg-card/50 rounded-xl border border-primary/10 overflow-hidden group">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  吴显峰
                </h3>
                <p className="text-primary mb-3">创始人兼 CTO</p>
                <p className="text-muted-foreground text-sm">
                  香港科技大学准博士生，研究领域为图像/视频生成模型，一作发表多篇 CCF-A
                  论文。研究成果多次被新浪网、极目新闻、机器之心、量子位等新闻媒体报道
                </p>
              </div>
            </div>
          </FloatingElement>

          <FloatingElement delay={0.4}>
            <div className="bg-card/50 rounded-xl border border-primary/10 overflow-hidden group">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Harry Yang 博士
                </h3>
                <p className="text-primary mb-3">科研顾问</p>
                <p className="text-muted-foreground text-sm">
                  香港科技大学助理教授, 耶鲁大学客座教授。曾任 Meta（Facebook）人工智能研究员。 做为负责人完成 Facebook
                  的 Sora: Make-a-Video, 参与 Llama 的开发
                </p>
              </div>
            </div>
          </FloatingElement>

          <FloatingElement delay={0.6}>
            <div className="bg-card/50 rounded-xl border border-primary/10 overflow-hidden group">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  赖重远博士
                </h3>
                <p className="text-primary mb-3">科研顾问</p>
                <p className="text-muted-foreground text-sm">
                  精细爆破全国重点实验室副教授，纽约州立大学布法罗分校访问学者
                </p>
              </div>
            </div>
          </FloatingElement>
        </div>
        <motion.div
          className="flex justify-center items-center w-full mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link href="/team">
            <Button variant="gradient" className="rounded-full px-8 py-6 text-lg">
              查看完整团队 <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* 联系我们 */}
      <div id="contact" className="container mx-auto mt-32 px-4 pb-24 relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          联系我们
        </motion.h2>
        <FloatingElement delay={0.2}>
          <GlowingCard className="max-w-md mx-auto">
            <p className="text-muted-foreground mb-6 text-center">
              有任何问题或合作意向？请填写下方表单，我们会尽快回复您。
            </p>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  姓名
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  邮箱
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  留言
                </label>
                <input
                  type="text"
                  id="message"
                  className="w-full px-4 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <Button variant="gradient" className="w-full">
                提交
              </Button>
            </form>
          </GlowingCard>
        </FloatingElement>
      </div>

      {/* 页脚 */}
      <footer className="border-t border-border py-8 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Image
                src="/images/openshot.png"
                alt="Openshot"
                width={100}
                height={30}
                className="h-8 w-auto"
              />
              <span className="text-muted-foreground text-sm">© 2025 开源智境. 保留所有权利</span>
            </div>
            <div className="flex gap-6">
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                隐私政策
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                服务条款
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                帮助中心
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
