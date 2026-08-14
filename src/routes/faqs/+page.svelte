<script lang="ts">
	const faqs = [
		{
			question: 'What is NXD?',
			answer:
				'NXD is a security-first, agent-native programming language designed for multi-target transpilation.'
		},
        {
            question: 'why was NXD created?',
            answer: 'NXD was created to provide a security-first, agent-native language that unifies development across multiple ecosystems through a single, predictable syntax. The project emphasizes documentation-driven development, portability, readability, and long-term maintainability.'
        },
		{
			question: 'Is NXD open source?',
			answer:
				'Yes. NXD is released under the MIT License and welcomes community participation.'
		},
		{
			question: 'What languages does NXD target?',
			answer:
				'Current documented targets include Nim, Elixir, and D.'
		},
        { 
            question: 'Is NXD production-ready?', 
            answer: 'NXD is currently under active development. While the language specification, examples, and reference architecture are publicly available, compiler implementation and backend validation remain ongoing. NXD should currently be considered an experimental project.' 
        },
        {
            question: 'How can I contribute to NXD?',
            answer: 'You can contribute to NXD by visiting the GitHub repository, where you can report issues, submit pull requests, and participate in discussions. Contributions from the community are highly valued and help improve the language.' 
        },
        {
            question: 'Why documentation first?',
            answer: 'The documentation-first approach ensures that developers have access to comprehensive and clear information about the language, its features, and how to use it effectively. This approach helps users understand the language better and facilitates easier adoption and contribution.'
        },
        {
            question: 'Where can I report issues?',
            answer: 'You can report issues on the NXD GitHub repository. Please provide detailed information about the issue, including steps to reproduce it, any error messages, and relevant code snippets. This will help the maintainers address the issue more effectively.'
        },
        {
            question: 'What does "agent-native" mean?',
            answer: 'Agent-native means that NXD is designed with deterministic structures, predictable syntax, and machine-readable patterns that make it easier for AI agents, automation systems, and developer tooling to analyze, generate, validate, and maintain code.'
        },
        {
            question: 'Does NXD replace Nim, Elixir, or D?',
            answer: 'No. NXD is designed to work alongside its target ecosystems rather than replace them. Developers can continue to benefit from the strengths of Nim, Elixir, and D while using NXD as a common development layer.'
        },
        {
            question: 'How is NXD different from Nim, Elixir, or D?',
            answer: 'Unlike Nim, Elixir, or D, NXD is designed around a unified syntax and documentation-first specification. Its goal is to provide a single language experience that can target multiple ecosystems while emphasizing security, maintainability, and agent-native development practices.'
        },
        {
            question: 'Can NXD be used as a stand alone language?',
            answer: 'Yes. NXD is being designed as a standalone language with its own syntax, conventions, and development model. Transpilation to Nim, Elixir, and D is one capability of the language, but NXD is intended to stand on its own rather than exist solely as a translation layer.'
        },
        {
            question: 'What license does NXD use?',
            answer: 'NXD is released under the MIT License, allowing individuals and organizations to use, modify, distribute, and contribute to the project.'
        },
        {
            question: 'Where can I find the NXD specification?',
            answer: 'The complete language specification, examples, reference architectures, and supporting documentation are available through the NXD documentation portal.'
        }
	];

	let openItem = $state<number | null>(null);

	function toggle(index: number) {
		openItem = openItem === index ? null : index;
	}
</script>
<div class="faq-page">
	<h1>Frequently Asked Questions</h1>

	{#each faqs as faq, index}
		<div class="faq-card">

			<button
				class="faq-question"
				onclick={() => toggle(index)}
			>
				{openItem === index ? '▼' : '►'}
				{faq.question}
			</button>

			{#if openItem === index}
				<div class="faq-answer">
					<p>{faq.answer}</p>
				</div>
			{/if}

		</div>
	{/each}
</div>
<style>
	.faq-page {
		max-width: 1000px;
		margin: 0 auto;
		padding: 2rem;
	}


.faq-card {
	background: #162235;
	border: 1px solid rgba(122, 215, 255, 0.15);
	border-radius: 1rem;
	margin-bottom: 1rem;
	overflow: hidden;
}

.faq-question {
	width: 100%;
	background: transparent;
	border: none;
	color: #7d4cff;

	font-size: 1rem;
	font-weight: 600;

	text-align: left;

	padding: 1rem;

	cursor: pointer;
}

.faq-answer {
	padding: 1rem;
	color: #dce7f5;
	border-top: 1px solid rgba(122, 215, 255, 0.15);
}
</style>