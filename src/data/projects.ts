export type Project = {
  number: string
  type: string
  title: string
  description: string
  secondaryDescription?: string
  technologies: string[]
  highlights: string[]
  github?: string
  liveUrl?: string
  detailsUrl?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    number: '01',
    type: 'GENOMICS · HPC · WORKFLOW AUTOMATION',
    title: 'HPC Genomics Pipeline',
    description:
      'A reproducible genomic analysis workflow for processing sequencing data from FASTQ through alignment, variant calling, annotation, and downstream analysis.',
    secondaryDescription:
      'The workflow was designed around scalable execution, reproducibility, and high-performance computing concepts.',
    technologies: [
      'Python',
      'Snakemake',
      'SLURM',
      'Bash',
      'GATK',
      'BWA',
      'VEP',
    ],
    highlights: [
      'Designed an end-to-end sequencing workflow',
      'Automated dependencies and processing with Snakemake',
      'Structured processing for parallel HPC execution',
      'Integrated alignment, variant calling, filtering, and annotation',
    ],
    featured: true,
  },
  {
    number: '02',
    type: 'FULL STACK · BIOINFORMATICS',
    title: 'GeneInsight',
    description:
      'A full-stack biomedical research platform combining gene, protein, literature, structural biology, and CRISPR data within a single research interface.',
    technologies: [
      'Python',
      'FastAPI',
      'React',
      'Vite',
      'UniProt',
      'PubMed',
      'AlphaFold',
    ],
    highlights: [
      'Integrated multiple scientific APIs and databases',
      'Built REST endpoints for biological data',
      'Implemented literature search and relevance ranking',
      'Integrated protein structure and CRISPR features',
    ],
    github: 'https://github.com/hpeninah/geneinsight',
    liveUrl: 'https://geneinsight.vercel.app/',
  },
  {
    number: '03',
    type: 'SYSTEMS BIOLOGY · MODELING',
    title: 'Computational Systems Biology Models',
    description:
      'A collection of computational models exploring biological systems through simulation, parameter scans, optimization, and mathematical modeling.',
    technologies: [
      'COPASI',
      'ODE Modeling',
      'Simulation',
      'Optimization',
    ],
    highlights: [
      'HIV recombinant-virus therapy model',
      'Breast cancer and estrogen signaling model',
      'Circadian rhythm oscillator',
      'Probiotic-pathogen interaction model',
    ],
  },
]