"""
快速查看知识图谱各级节点
"""

import re
import sys

def view_nodes_by_level(file_path, graph_type='beginner', target_level=None):
    """查看指定图谱和层级的节点"""
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 根据图谱类型选择正则
    if graph_type == 'beginner':
        match = re.search(r'export const BEGINNER_GRAPH_DATA.*?nodes: \[(.*?)\],\s*links: \[(.*?)\]', content, re.DOTALL)
        title = "初阶知识图谱"
    else:
        match = re.search(r'export const INTERMEDIATE_GRAPH_DATA.*?nodes: \[(.*?)\],\s*links: \[(.*?)\]', content, re.DOTALL)
        title = "中阶知识图谱"
    
    if not match:
        print(f"未找到{title}数据")
        return
    
    nodes_str = match.group(1)
    links_str = match.group(2)
    
    # 解析节点
    nodes = {}
    node_pattern = r"\{\s*id:\s*'([^']+)',\s*label:\s*'([^']+)',\s*group:\s*'([^']+)',\s*val:\s*(\d+).*?\}"
    for m in re.finditer(node_pattern, nodes_str):
        node_id = m.group(1)
        nodes[node_id] = {
            'label': m.group(2),
            'group': m.group(3),
            'val': int(m.group(4)),
            'children': [],
            'level': None
        }
    
    # 解析连接关系
    link_pattern = r"\{\s*source:\s*'([^']+)',\s*target:\s*'([^']+)'.*?\}"
    for m in re.finditer(link_pattern, links_str):
        source = m.group(1)
        target = m.group(2)
        if source in nodes and target in nodes:
            nodes[source]['children'].append(target)
    
    # 确定层级
    center_node = None
    for node_id in nodes:
        if 'Center' in node_id:
            center_node = node_id
            nodes[node_id]['level'] = 0
            break
    
    if center_node:
        queue = [(center_node, 0)]
        visited = {center_node}
        
        while queue:
            current_id, current_level = queue.pop(0)
            
            for child_id in nodes[current_id]['children']:
                if child_id not in visited:
                    visited.add(child_id)
                    nodes[child_id]['level'] = current_level + 1
                    queue.append((child_id, current_level + 1))
    
    # 按层级分组
    level_groups = {}
    for node_id, node_data in nodes.items():
        level = node_data['level']
        if level is not None:
            if level not in level_groups:
                level_groups[level] = []
            level_groups[level].append((node_id, node_data))
    
    # 显示结果
    print(f"\n{'='*70}")
    print(f" {title}")
    print(f"{'='*70}\n")
    
    # 如果指定了层级，只显示该层级
    if target_level is not None:
        levels_to_show = [target_level]
    else:
        levels_to_show = sorted(level_groups.keys())
    
    for level in levels_to_show:
        if level not in level_groups:
            print(f"第 {level} 级不存在")
            continue
            
        level_name = ['中心节点', '一级节点', '二级节点', '三级节点', '四级节点', '五级节点', '六级节点'][level] if level < 7 else f'{level}级节点'
        nodes_list = level_groups[level]
        
        print(f"┌{'─'*68}┐")
        print(f"│ {level_name:10s} (共 {len(nodes_list)} 个节点)".ljust(69) + "│")
        print(f"├{'─'*68}┤")
        
        # 按节点ID排序
        for node_id, node_data in sorted(nodes_list, key=lambda x: x[0]):
            label = node_data['label']
            group = node_data['group']
            val = node_data['val']
            
            # 颜色标记
            color_emoji = {
                'center': '🔴',
                'level1': '🔵', 
                'level2': '🟢',
                'level3': '🟡',
                'level4': '🟠',
                'level5': '🟤',
                'level6': '⚫'
            }.get(group, '⚪')
            
            # 截断过长的标签
            display_label = label[:35] + '...' if len(label) > 35 else label
            
            print(f"│ {color_emoji} {display_label:38s} [大小:{val:2d}] ({group})".ljust(69) + "│")
        
        print(f"└{'─'*68}┘\n")

def main():
    """主函数"""
    import os
    
    script_dir = os.path.dirname(os.path.abspath(__file__))
    project_dir = os.path.dirname(script_dir)
    graph_file = os.path.join(project_dir, 'frontend-master-vue', 'src', 'graphLevels.ts')
    
    # 解析命令行参数
    graph_type = 'beginner'
    target_level = None
    
    if len(sys.argv) > 1:
        if sys.argv[1] in ['beginner', 'intermediate']:
            graph_type = sys.argv[1]
        elif sys.argv[1].isdigit():
            target_level = int(sys.argv[1])
    
    if len(sys.argv) > 2 and sys.argv[2].isdigit():
        target_level = int(sys.argv[2])
    
    view_nodes_by_level(graph_file, graph_type, target_level)
    
    # 显示使用说明
    print("\n💡 使用说明:")
    print("  python view_node_levels.py                    # 查看初阶所有层级")
    print("  python view_node_levels.py intermediate       # 查看中阶所有层级")
    print("  python view_node_levels.py beginner 1         # 只查看初阶一级节点")
    print("  python view_node_levels.py intermediate 2     # 只查看中阶二级节点\n")

if __name__ == '__main__':
    main()
