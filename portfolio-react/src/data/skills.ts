export type SkillCategory = {
  title: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    skills: ['Python', 'Java', 'JavaScript', 'SQL', 'Bash'],
  },
  {
    title: 'Backend & APIs',
    skills: ['FastAPI', 'Spring Boot', 'REST APIs', 'GraphQL', 'Node.js'],
  },
  {
    title: 'Frontend',
    skills: ['React', 'Vite', 'Mantine', 'HTML', 'CSS'],
  },
  {
    title: 'Bioinformatics',
    skills: ['BWA', 'GATK', 'samtools', 'bcftools', 'VEP', 'ANNOVAR', 'COPASI'],
  },
  {
    title: 'Workflow & HPC',
    skills: ['Snakemake', 'SLURM', 'Conda', 'Linux'],
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB'],
  },
  {
    title: 'DevOps & Cloud',
    skills: ['Git', 'GitHub', 'Docker', 'Kubernetes', 'Jenkins', 'AWS', 'Azure'],
  },
]