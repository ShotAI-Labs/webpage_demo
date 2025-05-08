"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"
import FloatingElement from "@/components/floating-element"
import ThemeToggle from "@/components/theme-toggle"

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* 导航栏 */}
      <header className="container mx-auto py-4 px-4 relative z-10">
        <motion.nav
          className="flex items-center justify-between"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/openshot.png"
              alt="开源智境"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link href="/">
              <Button variant="ghost" className="text-foreground hover:text-primary">
                <ArrowLeft className="mr-2 h-4 w-4" />
                返回首页
              </Button>
            </Link>
          </div>
        </motion.nav>
      </header>

      {/* 团队标题 */}
      <div className="container mx-auto mt-16 px-4 text-center relative z-10">
        <motion.h1
          className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-300 to-blue-400 bg-clip-text text-transparent leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          我们的团队
        </motion.h1>
        <motion.p
          className="text-primary mt-8 text-xl max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          汇聚全球顶尖 AI 人才，致力于用人工智能革新视频创作
        </motion.p>
      </div>

      {/* 团队成员 */}
      <div className="container mx-auto mt-16 px-4 pb-24 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* 创始人 */}
          <FloatingElement delay={0.2}>
            <div className="bg-card/50 rounded-xl border border-primary/10 overflow-hidden group">
              <div className="h-64 bg-gradient-to-br from-purple-600/20 to-blue-500/20 relative">
                <Image
                  src="/images/xianfeng.png"
                  alt="吴显峰 - 创始人兼CTO"
                  width={300}
                  height={400}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
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

          <FloatingElement delay={0.2}>
            <div className="bg-card/50 rounded-xl border border-primary/10 overflow-hidden group">
              <div className="h-64 bg-gradient-to-br from-purple-600/20 to-blue-500/20 relative">
                <Image
                  src="/images/human.png"
                  alt="汪童 - 联合创始人兼CEO"
                  width={300}
                  height={400}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  汪童
                </h3>
                <p className="text-primary mb-3">联合创始人兼 CEO</p>
                <p className="text-muted-foreground text-sm">宾夕法尼亚大学数学系准硕士生，研究领域为复杂系统</p>
              </div>
            </div>
          </FloatingElement>

          <FloatingElement delay={0.2}>
            <div className="bg-card/50 rounded-xl border border-primary/10 overflow-hidden group">
              <div className="h-64 bg-gradient-to-br from-purple-600/20 to-blue-500/20 relative">
                <Image
                  src="/images/xianzu.png"
                  alt="吴显祖 - 联合创始人"
                  width={300}
                  height={400}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  吴显祖
                </h3>
                <p className="text-primary mb-3">联合创始人</p>
                <p className="text-muted-foreground text-sm">
                  香港科技大学（广州）研究助理，研究领域为三维视觉，一作发表多篇 CCF-A 论文
                </p>
              </div>
            </div>
          </FloatingElement>

          {/* AI 团队 */}
          <FloatingElement delay={0.4}>
            <div className="bg-card/50 rounded-xl border border-primary/10 overflow-hidden group">
              <div className="h-64 bg-gradient-to-br from-purple-600/20 to-blue-500/20 relative">
                <Image
                  src="/images/yexin.png"
                  alt="刘业鑫 - AI负责人"
                  width={300}
                  height={400}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  刘业鑫
                </h3>
                <p className="text-primary mb-3">AI 负责人</p>
                <p className="text-muted-foreground text-sm">
                  香港科技大学博士生，北京人工智能研究院研究实习生。研究领域为多模态大模型和视频生成模型，一作发表多篇
                  CCF-A 论文
                </p>
              </div>
            </div>
          </FloatingElement>

          <FloatingElement delay={0.4}>
            <div className="bg-card/50 rounded-xl border border-primary/10 overflow-hidden group">
              <div className="h-64 bg-gradient-to-br from-purple-600/20 to-blue-500/20 relative">
                <Image
                  src="/images/yajing.png"
                  alt="白亚靖 - AI 负责人"
                  width={300}
                  height={400}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  白亚靖
                </h3>
                <p className="text-primary mb-3">AI 负责人</p>
                <p className="text-muted-foreground text-sm">
                  香港科技大学访问学生。研究领域为生成模型后处理，发表多篇 CCF-A 论文
                </p>
              </div>
            </div>
          </FloatingElement>

          <FloatingElement delay={0.4}>
            <div className="bg-card/50 rounded-xl border border-primary/10 overflow-hidden group">
              <div className="h-64 bg-gradient-to-br from-purple-600/20 to-blue-500/20 relative">
                <Image
                  src="/images/human.png"
                  alt="Granine Huang - 智能体负责人"
                  width={300}
                  height={400}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Granine Huang
                </h3>
                <p className="text-primary mb-3">智能体负责人</p>
                <p className="text-muted-foreground text-sm">
                  英属哥伦比亚大学电气与计算机工程学士学位。研究领域为多智能体系统
                </p>
              </div>
            </div>
          </FloatingElement>

          <FloatingElement delay={0.6}>
            <div className="bg-card/50 rounded-xl border border-primary/10 overflow-hidden group">
              <div className="h-64 bg-gradient-to-br from-purple-600/20 to-blue-500/20 relative">
                <Image
                  src="/images/human.png"
                  alt="Peter Ni - 大模型负责人"
                  width={300}
                  height={400}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Peter Ni
                </h3>
                <p className="text-primary mb-3">大模型负责人</p>
                <p className="text-muted-foreground text-sm">
                  宾夕法尼亚大学准硕士生。研究领域为多模态大模型，曾发表多模态大模型顶会
                </p>
              </div>
            </div>
          </FloatingElement>

          {/* 科研顾问 */}
          <FloatingElement delay={0.6}>
            <div className="bg-card/50 rounded-xl border border-primary/10 overflow-hidden group">
              <div className="h-64 bg-gradient-to-br from-purple-600/20 to-blue-500/20 relative">
                <Image
                  src="/images/harry.png"
                  alt="Harry Yang - 科研顾问"
                  width={300}
                  height={400}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
              </div>
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
              <div className="h-64 bg-gradient-to-br from-purple-600/20 to-blue-500/20 relative">
                <Image
                  src="/images/zhongyuan.png"
                  alt="赖重远 - 科研顾问"
                  width={300}
                  height={400}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
              </div>
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
      </div>

      {/* 页脚 */}
      <footer className="border-t border-border py-8 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Image
                src="/images/openshot.png"
                alt="开源智境"
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
