# 评论审核配置文件
# Comment Moderation Configuration

## 敏感词列表 / Banned Words List

### 垃圾信息 / Spam
- spam
- 广告
- 推广
- 加微信
- 加QQ
- 联系方式
- 代理
- 刷单

### 不当内容 / Inappropriate Content
- 色情
- 赌博
- 毒品
- 暴力

### 恶意行为 / Malicious Behavior
- 钓鱼
- 诈骗
- 病毒
- 木马

## 使用说明 / Usage

1. **添加敏感词**：编辑 `.github/workflows/comment-moderation.yml` 文件中的 `bannedWords` 数组
2. **调整严格程度**：可以设置为完全匹配或模糊匹配
3. **自动操作**：
   - 默认：发送警告评论
   - 可选：自动锁定讨论（需取消注释相关代码）
   - 可选：自动删除评论（需要额外权限）

## 管理评论 / Manage Comments

### 手动管理
访问：https://github.com/Halcyon666/summary/discussions

### 屏蔽用户
访问：https://github.com/Halcyon666/summary/settings/interaction_limits

### 查看审核日志
访问：https://github.com/Halcyon666/summary/actions/workflows/comment-moderation.yml

## 注意事项 / Notes

- ⚠️ 敏感词过滤可能存在误判，建议定期检查
- ✅ GitHub 账号登录机制已经能过滤大部分垃圾评论
- 🔒 作为仓库所有者，你可以随时删除任何评论
- 📧 你会收到所有新评论的邮件通知

## 推荐设置 / Recommended Settings

1. **启用邮件通知**：及时发现不当评论
2. **设置临时限制**：限制新账号评论（可选）
3. **定期检查**：每周查看一次 Discussions
