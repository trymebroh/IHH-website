/* ============================================
   BLOG JAVASCRIPT
   Handles markdown parsing and blog functionality
   ============================================ */

// Blog post data - this would typically come from a build process
// For simplicity, we define posts here that can be easily updated
const BLOG_POSTS = [
  {
    slug: '2024-12-15-holiday-wellness',
    title: 'Holiday Wellness for Women: Staying Grounded Without Extremes',
    date: '2024-12-15',
    author: 'Alicia',
    excerpt: 'The holidays tend to bring a lot to the surface. Not because anyone is doing something wrong — but because life gets fuller all at once.',
    image: '/images/blog/holiday-wellness.webp',
    categories: ['wellness', 'foundations'],
    content: `
# Holiday Wellness for Women: Staying Grounded Without Extremes

The holidays tend to bring a lot to the surface.

Not because anyone is doing something wrong — but because life gets fuller all at once. More people. More food. More commitments. More emotion. At the same time, routines soften, schedules shift, and there's often less margin than usual.

Most women aren't sitting down and thoughtfully reassessing their wellness during these busy weeks. They're moving fast, juggling responsibilities, showing up for others, and realizing somewhere along the way that they feel more tired, more off-rhythm, or a little disconnected from themselves — without having much space to slow down and name it.

This week alone, I've had more than one patient say, "But it's the holidays." Some may use that phrase as an excuse, but, for most I find that it's more of an acknowledgment that the usual ways of taking care of themselves feel harder right now.

And that makes sense.

The environment around you has changed. When that happens, the goal isn't to force yourself to function the same way — it's to find small ways to stay supported within the season you're actually living in.

## When the Pressure to "Stay on Track" Sneaks In

Around the holidays, there's often an unspoken pressure to either hold everything together perfectly or mentally check out until January. That pressure can quietly show up as guilt, self-criticism, or the sense that you're already behind.

When those thoughts come up, one helpful step is simply noticing them without correcting yourself. Naming "this is pressure, not reality" can create a surprising amount of relief. Another supportive shift is narrowing your focus: instead of trying to maintain everything, choose one area of health to gently prioritize this week — sleep, regular meals, or movement — and let the rest be flexible.

It can also help to remind yourself that progress isn't erased by a season. Your body responds to patterns over time, not to a few days or weeks of change. Repeating that truth when guilt creeps in can help interrupt the urge to give up altogether.

## Anchors That Still Work When Life Is Full

During the holidays, it's rarely realistic to keep every routine in place. What is realistic is choosing a few simple anchors — familiar habits that help your body feel steady even when schedules are unpredictable.

An anchor might be eating a [nourishing breakfast](/blog/post.html?post=2024-10-15-probiotic-smoothie-bowl) most mornings so blood sugar doesn't swing all day. It could be drinking water consistently before noon, stepping outside for a short walk or sunlight exposure, or keeping a familiar bedtime window when possible.

These anchors work best when they're portable. Something you can do whether you're at home, traveling, or hosting. You don't need many — one or two is enough to keep your nervous system oriented.

## Food Without the Weight of Guilt

Food carries extra meaning during the holidays. It's tied to tradition, comfort, memory, and connection. Enjoying it doesn't mean you've stepped away from your health.

One practical way to support your body during this season is to eat regularly throughout the day, rather than skipping meals to "balance things out" later. This often helps energy, digestion, and mood more than restriction ever could.

Another helpful tool is slowing meals down when you can — even just taking a few deep breaths before eating or sitting down instead of eating on the go. And when holiday meals are over, returning to familiar foods the next day without compensating or "resetting" helps keep your body in rhythm.

There is no moral scorecard attached to what you eat.

## Awareness Without Rules or Extremes

Alcohol and sweets tend to show up more frequently this time of year. Awareness here doesn't need to become rigid or restrictive.

One gentle strategy is alternating alcohol with water or choosing earlier-in-the-evening drinks so sleep isn't as disrupted. Another is paying attention to how certain choices affect you the next day — not to judge yourself, but to guide future decisions.

## Protecting Rest Where You Can

Sleep is often the quiet casualty of the holiday season. Late nights, travel, and gatherings add up quickly.

Perfect sleep isn't realistic for most women right now, but small efforts still matter. Keeping wake times similar from day to day can help your body stay regulated, even if bedtime shifts. Getting morning light exposure (even a few minutes) supports your circadian rhythm.

Creating a simple wind-down cue can also help. That might look like stretching, reading, prayer, or putting your phone away ten minutes earlier than usual. These signals tell your nervous system it's safe to rest.

## Movement That Feels Supportive

Movement during the holidays doesn't need to be intense or structured to count.

Walking after meals can support digestion and blood sugar. Stretching before bed can help your body release tension. Even a few minutes of movement between commitments can help clear your head and regulate stress.

If formal workouts don't fit right now, that's okay. The goal is to keep your body moving in ways that feel supportive, not punishing.

## Letting Wellness Fit Into Real Life

One of the most overlooked parts of women's wellness is joy.

Connection, laughter, shared meals, and meaningful traditions all contribute to wellbeing. Making space for moments that feel life-giving is a form of care. That might mean saying no to one obligation, building in a quiet morning, or letting yourself be fully present instead of mentally tracking what you "should" be doing.

Wellness was never meant to pull you out of the season you're living in.

You don't need a full reset come January.

You don't need to make up for anything.

You don't need to do this perfectly.

Staying gently connected to yourself through nourishment, rest, movement, and self-compassion is more than enough. Even during the holidays.

Merry Christmas! Stay well my friends,

Alicia
    `,
    disclaimer: `This content is for educational and informational purposes only and is not intended to diagnose, treat, cure, or prevent any disease. It does not replace individualized medical advice, diagnosis, or treatment. Readers should consult their licensed healthcare provider regarding personal health concerns.

Any individuals depicted in images on this website or associated content are models or stock photography subjects and are not patients, clients, or recipients of services from Intention Holistic Health. Images are used for illustrative purposes only and do not represent clinical relationships, medical outcomes, or specific health conditions.

Intention Holistic Health provides educational wellness guidance and, where applicable, Kentucky-based nurse practitioner services within scope and licensure.`
  },
  {
    slug: '2024-12-01-unmedicated-birth',
    title: 'How I Prepared for an Unmedicated Birth',
    date: '2024-12-01',
    author: 'Alicia',
    excerpt: 'My personal story, not medical advice. Preparing for an unmedicated birth wasn\'t about perfection—it was about intention.',
    image: '/images/blog/unmedicated-birth-new.webp',
    categories: ['preconception'],
    content: `
# How I Prepared for an Unmedicated Birth

*My personal story, not medical advice*

There's something sacred about preparing for birth—especially when you're hoping for an unmedicated experience. For me, the preparation wasn't about proving anything or "muscling through" labor pain. It was about supporting my body, trusting my instinct, and beholding the God who designed birth with such intentional detail.

Every woman's pregnancy, preferences, and medical needs are different, and no two birth stories look the same. This isn't a checklist or a formula. It's simply what I personally chose to do to feel grounded, strong, and supported going into labor.

Below are some ways I prepped physically, emotionally, and spiritually for birth. This list is not exhaustive but they're some of the practices that made the biggest difference for me.

## 1. A Birthing Class Designed for an Unmedicated Birth

There are countless birthing classes out there, but I intentionally chose one that aligned with my goal of an unmedicated labor—Birthing Naturally (DFW).

This multi-week course was incredibly valuable for me, but also for my husband. It helped us better understand:

- What's physiologically happening during each stage of labor
- How to advocate for my preferences while remaining flexible
- The mental techniques required for an unmedicated birth
- The importance of rhythm, breath, and instinctual movement
- Natural tools to use for pain management
- Ways my partner could support me physically, mentally and emotionally throughout the stages of labor and into postpartum

More than anything, it gave me confidence. Confidence that my body knew exactly what to do—and that surrender, not control, would be the foundation of my experience. And man, for a type A, desire-for-control personality like my own, that was something I had to hear.

## 2. Staying Active: Walking, Lifting, and Moving with Intention

Movement was a huge part of my pregnancy.

I walked often, lifted weights safely, and focused on functional strength that would support labor and postpartum recovery. Resistance training helped me maintain stability and muscle tone, while walking supported circulation, mobility, and nervous system regulation.

I wasn't chasing fitness goals—I was nurturing a body that would sustain me through one of the most demanding and beautiful physical events of my life.

## 3. Pelvic Floor Therapy: Creating Space & Strength

One of the most impactful things I did throughout pregnancy was pelvic floor therapy (shoutout to My Fit Pelvis- McKinney).

Working with a pelvic floor therapist helped me understand what true relaxation feels like (which is just as important as strength). I learned how my breathing patterns influence pelvic floor mobility, practiced positions to create more space in the pelvis, and gained tools that made the pushing stage feel more instinctive and effective. I learned how to work with my body instead of against it.

I also received valuable feedback about areas of weakness and tension in the pelvic floors, and a personalized exercise routine to optimize my muscles.

## 4. Meditation & Mental Preparation

Like I mentioned earlier, so much of labor is mental. It's fascinating the effects that our minds have on the physical processes of labor and delivery. In her book *Hypnobirthing: Practical Ways to Make Your Birth Better*, Siobhan Miller walks readers through the physiological ramifications of fear on pelvic floor tension and hormone secretion during labor. Reading the details of that process further encouraged me to mentally prepare for birth. Here are a few tools that helped me do this:

### Hypnobabies Course

I completed the Hypnobabies program during pregnancy, which taught me hypnosis-based relaxation techniques and scripts that supported comfort and calm. These tools became a huge part of my mental preparation, and became part of my nightly routine that helped with my sleep the last month of pregnancy.

### Christian Hypnobirthing (Used During Labor)

During labor, I used the Christian Hypnobirthing tracks, which grounded me in Scripture, truth, and peace. Hearing affirmations rooted in God's design for birth helped quiet fear and helped me lean fully into the process.

### Headspace Pregnancy & Labor Meditations

I also used Headspace Pregnancy and Labor meditations. They helped me practice mindful breathing, body awareness, and surrender—skills that translated beautifully into labor.

These practices didn't remove intensity. But they reframed it and helped me stay anchored through each wave.

## 5. Scripture: Seeding the Word in My Mind

In the days leading up to labor, I spent time memorizing Scripture, writing it out, and reflecting on the truth that the Lord designed our bodies with wisdom and purpose.

Birth is not random. Our bodies know what to do—and even our babies have instincts in the birthing process that our Creator lovingly equipped them with.

Again, so much of birth is surrender. Meditating on Scripture helped me release fear, trust the timing, embrace uncertainty, and root myself in peace.

## 6. Nourishment

Another key part of my preparation was food and hydration.

Throughout pregnancy, I focused on nutrient-dense meals and specifically increased my intake of:

- Protein — for steady energy and blood sugar balance
- Choline-rich foods — eggs, salmon, beef
- Potassium-rich foods — bananas, potatoes, coconut water, leafy greens

I also incorporated plenty of whole foods, electrolytes, a high-quality prenatal, and simple meals that were easy to digest as I moved closer to my due date. These weren't strict rules—just intentional choices that helped me feel nourished and supported as my due date approached. *Nine Golden Months* was a great resource for recipes and education as it relates to diet during pregnancy too.

## Every Woman's Path is Different

I want to emphasize this clearly:

There is no one right way to prepare for birth—medicated or unmedicated.

Every body is different.

Every pregnancy is different.

Every medical situation is different.

Every version of birth—vaginal, cesarean, medicated, unmedicated—is valid and sacred.

This is simply my story, and the practices that helped me feel supported and aligned with my personal goals.

## A Note on What Helped Me Most

Preparing for an unmedicated birth wasn't about perfection—it was about intention. I focused on practices that supported my body, strengthened my mind, and grounded me spiritually. And while birth unfolded in its own way, these preparations helped me enter the experience feeling peaceful, equipped, and deeply connected to my baby and my Creator.

If you're exploring pregnancy or preparing for birth and want guidance on building a nourishing foundation, [Intention Holistic Health offers support](/services/services.html) that meets you where you are in preconception, pregnancy, and postpartum. Learn more about [preparing your body for pregnancy](/blog/post.html?post=2024-11-15-body-first-home).

All my love,

Alicia
    `,
    disclaimer: `This blog is for informational and educational purposes only. It reflects my personal experience and is not medical advice or a substitute for individualized care. Always consult a qualified healthcare provider before making decisions about pregnancy, labor, or medical care.`
  },
  {
    slug: '2024-11-15-body-first-home',
    title: 'Your Body Is the First Home: Returning to the Foundations That Support Fertility and Pregnancy Health',
    date: '2024-11-15',
    author: 'Alicia',
    excerpt: 'You don\'t need perfection to prepare for pregnancy — you need foundations.',
    image: '/images/blog/body-first-home-new.webp',
    categories: ['preconception', 'foundations'],
    content: `
# Your Body Is the First Home: Returning to the Foundations That Support Fertility and Pregnancy Health

Many women feel overwhelmed when they begin thinking about pregnancy. Some wonder whether they're behind, while others don't realize that preparation even matters until the desire for a baby becomes real.

Here's the truth your body already knows: you don't need perfection to prepare for pregnancy — you need foundations. And these foundations matter not only for fertility and conception, but for long-term hormone health, metabolic resilience, and generational wellness.

Research consistently shows that preconception nutrition, sleep quality, stress patterns, environmental exposures, and nutrient status influence hormone balance, ovulation, early fetal development, and maternal health outcomes. These are not trends — they are core physiological processes women were never taught to support.

*This article is for educational purposes only and not medical advice.*

## Foundation 1: Nourishment That Steadies Hormones and Blood Sugar

A preconception nutrition approach isn't about restriction — it's about stability. When blood sugar rises and falls gently, your hormones communicate more effectively, inflammation is reduced, and energy remains steadier throughout the day. Research shows that balanced dietary patterns support metabolic and gestational health even before pregnancy begins.

Simple shifts such as beginning the day with protein, adding fiber and color to meals, and choosing snacks that provide sustained energy help create a nourished internal environment that supports ovulation, cycle health, and mood.

## Foundation 2: Mineral Replenishment in a World That Depletes Women

Hydration is more than drinking water — it's about restoring electrolytes and minerals that influence blood volume, energy production, thyroid health, and early pregnancy physiology. Minerals are crucial during preconception because blood volume expansion and hormonal changes begin early and require adequate micronutrients.

Modern stress, heavy menstrual periods, and nutrient-depleted diets can leave women running on low reserves. [Hair Tissue Mineral Analysis (HTMA)](/htma.html) is a great tool used at Intention for providing insights into individual mineral needs. Restoring minerals through mineral-rich water, leafy greens, beans, nuts, seeds, and dried fruit provides foundational support for hormone balance and whole-body resilience.

## Foundation 3: Movement as Rhythm — Not Perfection

Movement is one of the most supportive ways to prepare the body for conception and pregnancy. Consistent physical activity improves insulin sensitivity, supports fertility, enhances circulation, and strengthens the musculoskeletal system needed for pregnancy and postpartum adaptation.

The goal is not intense workouts — it's rhythm. Gentle strength training, walking, stretching, and mobility work help build a body that is stable, adaptable, and prepared for the physical demands of motherhood.

## Foundation 4: Nervous System Regulation and Rest for Hormone Balance

Sleep and stress patterns directly influence fertility, cortisol rhythms, metabolic health, and emotional wellbeing. Poor sleep and chronic stress dysregulate the hypothalamic-pituitary-ovarian axis, affecting ovulation and hormone balance. Sleep disturbances are also associated with increased mood symptoms and complications during pregnancy.

Simple rhythms — stepping outside for morning light, winding down before bed, practicing breathwork, journaling, or prayer — help regulate the nervous system. Rest is not optional; it is foundational to hormonal regulation and women's long-term health.

## Foundation 5: Reducing Harmful Exposures Without Striving for Perfection

Environmental exposures like synthetic fragrances, plasticizers, and certain household chemicals can disrupt endocrine function and increase the body's detoxification burden. Evidence shows that prenatal and preconception exposure to endocrine-disrupting chemicals may influence fetal development and maternal health markers.

ACOG recommends minimizing avoidable environmental exposures during preconception and pregnancy to support fertility and healthy fetal development.

Small changes make meaningful impact:

- Avoid microwaving plastic
- Choose fragrance-free personal care products
- Improve home ventilation
- Simplify household cleaners

These shifts gently reduce physiological stress without demanding perfection.

## Foundation 6: A Prenatal Vitamin as an Act of Preparation — Not an Afterthought

One of the most impactful steps in preparing for pregnancy is beginning a prenatal vitamin before conceiving. Neural tube development occurs within the first 3–4 weeks of pregnancy — often before a woman knows she is pregnant. Adequate folate during this period is essential for reducing neural tube defect risk.

The U.S. Preventive Services Task Force recommends that all pregnant-capable women take folate to support early fetal development.

Choosing a prenatal with methylated folate (5-MTHF) supports women who may not efficiently convert synthetic folic acid — a concern affecting up to 40% of the population. High-quality formulas provide methyl-folate, choline, minerals, and omega-3 fatty acids that align with evidence-based nutrient needs.

Beginning a prenatal 3+ months before trying to conceive supports egg maturation, hormonal signaling, and nutritional stores leading into pregnancy — making it both a physiological and symbolic act of care.

## Foundations for a Lifetime of Women's Health

These six foundations are not simply "preconception tips." They are lifelong pillars that support:

- Hormone balance
- Metabolic stability
- Nervous system regulation
- Strong bones and muscle
- Emotional wellbeing
- Smoother postpartum and menopausal transitions

Women who learn these foundations before pregnancy often feel more grounded, more resilient, and more supported throughout motherhood and beyond.

## A Gentle Path Forward

Preconception care does not need to be overwhelming. It's about reconnecting with the rhythms your physiology is already built upon and nourishing your body with intention.

If you want personalized support during preconception, pregnancy, or postpartum, the [Intentional Mama Programs](/services/services.html) and [Lab Review Services](/services/lab-review.html) at Intention Holistic Health provide individualized guidance to honor your body's physiology and your season of life.

Your body is the first home your baby will ever know. Caring for it with intention is an act of love that extends far beyond pregnancy — shaping the health of generations to come.

With love + intention,

Alicia
    `,
    disclaimer: `This article is for educational purposes only and is not medical advice. It does not establish a provider–patient relationship. Always consult your healthcare provider for guidance about your personal health. Clinical services at Intention Holistic Health PLLC are available only to Kentucky residents.`
  },
  {
    slug: '2024-05-15-mental-health-pcos',
    title: 'May is Mental Health Awareness Month',
    date: '2024-05-15',
    author: 'Alicia',
    excerpt: 'Women with PCOS experience anxiety and depression 3x more often than women without the condition. Let\'s talk about practical ways to support your mental health.',
    image: '/images/blog/mental-health-pcos.webp',
    categories: ['pcos', 'wellness'],
    content: `
# May is Mental Health Awareness Month

May is Mental Health Month—a topic that is personally meaningful to me. The statistics are concerning: women with PCOS face an 8.5x higher risk of suicide attempt than those without the condition and experience anxiety and depression 3x more often than women without PCOS. Understanding the [gut-brain connection](/blog/post.html?post=2024-10-01-gut-health-pcos) is key to understanding why.

These aren't just statistics—they represent real women who are struggling. Understanding the intersection of hormone health and mental wellness through holistic approaches that consider biological factors is essential.

## 9 Practical Tips for Mental Health Support

### 1. Hydration

Drink half your body weight in ounces daily (water, herbal tea, coconut water) to reduce agitation and anxiety. Proper hydration affects brain function and mood more than most people realize.

### 2. Sleep

Aim for eight+ hours nightly. Journal worries before bed, meditate on five positive daily occurrences, and consider magnesium supplements to support restful sleep.

### 3. Sunlight

Get 15+ minutes of direct eye exposure within 30 minutes of waking to boost energy, mood, and sleep quality. Morning light exposure is one of the most powerful regulators of your circadian rhythm.

### 4. Blood Sugar Regulation

Consume protein and healthy fats before carbs. Break fasts with protein-fat-fiber combinations and move ten minutes post-meals to support stable blood sugar and reduce mood swings. Getting a [lab review](/services/lab-review.html) can help you understand your blood sugar patterns.

### 5. Breathwork

Practice extended exhale breathing (4-in, 8-out) or square breathing (4-4-4-4 pattern) for mental clarity and stress resilience. Even a few minutes can shift your nervous system state.

### 6. Grounding Exercises

Use sensory awareness when feeling overwhelmed: name five things seen, four felt, three heard, two smelled, one tasted. This 5-4-3-2-1 technique brings you back to the present moment.

### 7. Vitamin D Optimization

Have levels checked and target 60+ ng/mL with appropriate D3+K2 supplementation to address depressive symptoms. Low vitamin D is common in women with PCOS.

### 8. Omega-3 Supplementation

Consume low-mercury fatty fish 2-3 weekly or quality omega-3 supplements for brain and inflammation support. These essential fats are crucial for mental health.

### 9. Alcohol Avoidance

Limit or eliminate alcohol consumption, which functions as a depressant and triggers rebound anxiety. Alcohol also disrupts sleep and blood sugar balance.

## You're Not Alone

If you're struggling with PCOS and mental health, please reach out—to a professional, a friend, or a support group. You don't have to carry this alone.

Want more tips? Download the complimentary **Holistic Habits Checklist** for additional wellness strategies focused on mood support and brain health.
    `,
    disclaimer: `The information provided in this blog is for educational and informational purposes only and is not intended to serve as medical advice, diagnosis, or treatment. Health decisions require partnership with licensed providers familiar with individual circumstances. Clinical services are available exclusively to Kentucky residents through formal provider-patient relationships.`
  },
  {
    slug: '2024-10-15-probiotic-smoothie-bowl',
    title: 'Recipe: Probiotic-Rich Smoothie Bowl',
    date: '2024-10-15',
    author: 'Alicia',
    excerpt: 'Looking for a delicious and nutritious way to start your day? This smoothie bowl is packed with fiber, protein, and gut-friendly ingredients.',
    image: '/images/blog/smoothie-bowl-cropped.webp',
    imageStyle: 'max-height: 400px; width: auto; margin: 0 auto; display: block;',
    cardImageStyle: 'object-position: left center;',
    categories: ['recipes', 'breakfast', 'pcos'],
    content: `
# Recipe: Probiotic-Rich Smoothie Bowl

Looking for a delicious and nutritious way to start your day? Try this refreshing Probiotic-Rich Smoothie Bowl packed with fiber, protein, and gut-friendly ingredients like coconut water, kefir, yogurt, flax seeds, and hemp hearts. This smoothie bowl is not only tasty but also supports digestive health and provides sustained energy throughout the morning. Smoothies are my favorite way to get in extra nutrients because you can "hide" so much in them! Frozen cauliflower in a smoothie?? Trust me, you can't even taste it, and if you don't like veggies, give it a try! Trying to incorporate adaptogens in your diet? Smoothies are a great way to hide powders, like ashwagandha, while still getting that adrenal support you're looking for. My favorite thing about smoothies is you get to tailor it to your preferences! Play around with it, incorporate new things, tailor the ratios as you need.

## Ingredients

- 1 cup coconut water (be sure to check the label, "coconut water" should be the only ingredient)
- 1/4 cup kefir (plain, full-fat, unsweetened) **optional**
- 3/4 cup yogurt (Organic Whole Milk Greek or dairy-free alternative—check the label, the fewer the ingredients the better!)
- 1 tablespoon flax seeds
- 1 tablespoon hemp hearts
- 1/2-1 cup frozen (preferably organic) low glycemic berries (such as blueberries, raspberries, or strawberries)
- Handful of frozen spinach or kale
- Optional: unflavored collagen, unflavored or vanilla protein powder for extra protein
- Optional: ½ cup frozen cauliflower (for extra fiber & nutrients)
- Optional: ½ tablespoon honey or maple syrup
- Toppings: sliced fruits, nuts, seeds, unsweetened coconut or granola (check out our [Hormone-Friendly Granola Recipe](/blog/post.html?post=2024-09-15-hormone-friendly-granola)!)

## Instructions

1. **Blend Ingredients:** In a blender, combine all ingredients minus toppings. Blend until smooth and creamy.
2. Pour the smoothie into a bowl.
3. **Add Toppings:** Top your smoothie bowl with sliced fruits like berries, kiwi, or banana, nuts (almonds, walnuts), seeds (chia seeds, pumpkin seeds), a sprinkle of granola, Honey Bee Pollen (rich in B vitamins), cocoa nibs (high in antioxidants & delicious), whatever floats your boat!

## Why You'll Love It

- **Probiotic Boost:** Kefir and yogurt are excellent sources of probiotics, which support [gut health](/blog/post.html?post=2024-10-01-gut-health-pcos) and digestion.
- **Fiber-Packed:** Flax seeds and hemp hearts are rich in fiber, promoting satiety, digestive regularity, and blood sugar regulation. Adding cauliflower or other veg increases fiber even more.
- **High Protein:** Greek yogurt is a great source of protein, calcium & vitamin D. Hemp hearts add plant-based protein, perfect for a satisfying breakfast or post-workout snack. Adding collagen or protein powder increases the protein content of the smoothie, supporting muscle repair and satiety.
- **Beneficial Fats:** Flax seeds are rich in alpha-linolenic acid (ALA), a type of omega-3 fatty acid that supports heart health and inflammation reduction. Hemp hearts contain a balanced ratio of omega-3 and omega-6 fatty acids, which are important for brain health and inflammation control.
- **Hydrating:** Coconut water provides electrolytes and hydration without added sugars or artificial ingredients.
- **Natural Sweetness:** Honey provides a touch of sweetness to the smoothie without refined sugars, enhancing flavor. Local honey can also be beneficial for seasonal allergies.

Enjoy this Probiotic-Rich Smoothie Bowl as a nutritious and flavorful way to fuel your day!

All my love,

Intention Holistic Health
    `,
    disclaimer: `Note: Always consult with a healthcare professional before making significant changes to your diet, especially if you have specific health concerns or conditions.`
  },
  {
    slug: '2024-10-01-gut-health-pcos',
    title: 'Gut Health and PCOS: The Missing Piece of the Puzzle',
    date: '2024-10-01',
    author: 'Alicia',
    excerpt: 'The trillions of microorganisms in your gut play crucial roles in hormone regulation and inflammation control. Understanding this connection is key to managing PCOS.',
    image: '/images/blog/gut-health-pcos-new.webp',
    categories: ['pcos', 'foundations'],
    content: `
# Gut Health and PCOS: The Missing Piece of the Puzzle

You might wonder about the connection between your digestive system and PCOS, but this relationship proves crucial for reclaiming vitality when managing this condition.

As a nurse practitioner and wellness practitioner, I've witnessed how prioritizing digestive wellness transforms PCOS symptom management and overall health. Let's explore why this matters.

## The Gut-PCOS Connection

Your digestive tract houses trillions of microorganisms called the gut microbiota. These organisms regulate digestion, nutrient absorption, immunity, and hormone equilibrium. Research indicates that microbiota imbalances may contribute to PCOS development and progression.

By nourishing your digestive system, you can positively influence PCOS symptoms and health outcomes.

## Four Key Impacts

### 1. Inflammation

Microbiota imbalances trigger chronic inflammation, contributing to insulin resistance and hormonal disruption. Inflammation is at the root of many PCOS symptoms.

### 2. Insulin Sensitivity

A healthy microbiota supports blood sugar regulation—critical for managing weight gain, acne, and menstrual irregularities. When your gut is off, your blood sugar often is too.

### 3. Hormone Balance

The microbiota aids hormone metabolism and elimination. Imbalances disrupt this process, potentially worsening symptoms like excess androgens.

### 4. Mental Health

The gut-brain axis bidirectionally influences mood and stress. Microbiota imbalances link to anxiety and depression, which are common PCOS comorbidities.

## Nurturing Your Gut for PCOS Wellness

Evidence-based strategies include:

### Dietary Modifications

**Increase Fiber Intake:** Consume fiber-rich fruits, vegetables, whole grains, and legumes. Research shows higher fiber correlates with improved insulin sensitivity and reduced inflammation.

**Probiotic and Prebiotic Foods:** Add low-sugar options like yogurt, kombucha, kefir, and fermented vegetables. Include prebiotic foods like garlic, onions, and leeks. Studies suggest these may improve insulin resistance and reduce androgen levels.

### Lifestyle Modifications

**Regular Exercise:** Physical activity positively influences microbiota composition and diversity, promoting beneficial bacteria growth and reducing inflammation.

**Stress Management:** Chronic stress disrupts microbiota balance and increases intestinal permeability. Practice mindfulness meditation, yoga, and deep breathing.

**Stay Hydrated:** Drink at least half your body weight in ounces of water daily to support digestion and nutrient absorption.

### Supplementation

**Omega-3 Fatty Acids:** Found in fatty fish, flaxseeds, and walnuts, these have anti-inflammatory properties. Supplementation may improve microbiota composition and reduce PCOS symptoms.

**Probiotic Supplements:** Lactobacillus and Bifidobacterium species show therapeutic potential, possibly improving insulin sensitivity and menstrual regularity.

## Listen to Your Body

Listen to your body's signals—bloating, constipation, diarrhea, skin changes, and mood shifts communicate digestive distress. These symptoms represent messages from your microbial community.

Your digestive system isn't isolated; it's intricately connected to overall health and PCOS management.

## Closing Thoughts

If ready to deepen your digestive wellness journey while managing PCOS, reach out for [personalized one-on-one support](/services/services.html) at Intention Holistic Health. We'll explore strategies resonating with your unique body and goals.

With love and digestive-healing energy,

Alicia
Intention Holistic Health
    `,
    disclaimer: `This blog provides educational information only and doesn't constitute medical advice, diagnosis, or treatment. Health decisions require partnership with licensed healthcare providers familiar with your individual circumstances and medical history.

Topics discussing nutrition, supplements, and wellness practices aren't personalized clinical guidance. Don't disregard professional medical advice based on this content.

Clinical services at Intention Holistic Health PLLC serve Kentucky residents only through formal provider-patient relationships. Educational content doesn't replace medical care, prenatal/postpartum services, or emergency services.`
  },
  {
    slug: '2024-09-15-hormone-friendly-granola',
    title: 'Recipe: Hormone-Friendly Granola',
    date: '2024-09-15',
    author: 'Alicia',
    excerpt: 'An all-time-favorite snack: granola that is both delicious and packed with hormone-friendly ingredients to support health and wellbeing from the inside out.',
    image: '/images/blog/granola.webp',
    categories: ['recipes', 'breakfast', 'pcos'],
    content: `
# Recipe: Hormone-Friendly Granola

An all-time-favorite snack: granola that is both delicious and packed with hormone-friendly ingredients to support health and wellbeing from the inside out.

I often opt for grain-free granola for most clients because grains can sometimes exacerbate symptoms such as insulin resistance and inflammation. This is especially helpful for women managing [PCOS](/blog/post.html?post=2024-10-01-gut-health-pcos).

## Ingredients

- 1 cup organic sprouted rolled oats (exclude for grain-free granola)
- 1 cup chopped raw nuts (walnuts, almonds, cashews, etc)
- 1/2 cup raw hulled pumpkin seeds
- 1/2 cup raw sunflower seeds
- 1/2 cup unsweetened shredded coconut
- 1/4 cup coconut oil, melted
- 1/4 cup pure maple syrup or honey
- 1 teaspoon vanilla extract
- 1 teaspoon ground cinnamon
- Pinch of sea salt

## Instructions

1. Preheat oven to 300°F (150°C) and line a baking sheet with parchment paper
2. Combine chopped almonds, walnuts, pumpkin seeds, sunflower seeds, and shredded coconut
3. Whisk together melted coconut oil, maple syrup or honey, vanilla extract, cinnamon, and sea salt
4. Pour wet ingredients over dry ingredients and stir until well coated
5. Spread granola mixture evenly onto prepared baking sheet
6. Bake for 25-30 minutes, stirring halfway through, until golden brown and fragrant
7. Remove and let cool completely before stirring in optional add-ins
8. Store in airtight container at room temperature for up to two weeks, or in refrigerator for longer shelf life

## Why This Granola Supports Your Hormones

This granola provides essential vitamins, minerals, and healthy fats through nutrient-dense ingredients like almonds, walnuts, pumpkin seeds, and coconut. By avoiding refined sugars and inflammatory oils found in store-bought options, this recipe helps stabilize blood sugar and support hormone balance.

## How to Enjoy

- Top your [smoothie bowl](/blog/post.html?post=2024-10-15-probiotic-smoothie-bowl)
- Add to yogurt
- Eat as a snack with a handful of berries
- Sprinkle on baked apples or pears

Nourish your body, embrace delicious, wholesome foods, and thrive!

All my love,

Alicia
Intention Holistic Health
    `,
    disclaimer: `The information provided in this blog is for educational and informational purposes only and is not intended to serve as medical advice, diagnosis, or treatment. Health decisions require partnership with licensed providers familiar with individual circumstances. Clinical services are available exclusively to Kentucky residents through formal provider-patient relationships.`
  }
];

// -----------------------------------------
// UTILITY FUNCTIONS
// -----------------------------------------

// Simple markdown parser
function parseMarkdown(markdown) {
  let html = markdown;

  // Headers
  html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');

  // Links [text](url)
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2">$1</a>');

  // Bold
  html = html.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>');

  // Italic
  html = html.replace(/\*(.*?)\*/gim, '<em>$1</em>');

  // Lists
  html = html.replace(/^\- (.*$)/gim, '<li>$1</li>');

  // Wrap consecutive li elements in ul
  html = html.replace(/(<li>.*<\/li>\n?)+/gim, function(match) {
    return '<ul>' + match + '</ul>';
  });

  // Paragraphs (lines that don't start with < and aren't empty)
  html = html.split('\n').map(function(line) {
    line = line.trim();
    if (line && !line.startsWith('<') && !line.startsWith('#')) {
      return '<p>' + line + '</p>';
    }
    return line;
  }).join('\n');

  // Clean up empty paragraphs
  html = html.replace(/<p><\/p>/g, '');
  html = html.replace(/<p>\s*<\/p>/g, '');

  return html;
}

// Format date
function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
}

// -----------------------------------------
// BLOG LISTING PAGE
// -----------------------------------------

function renderBlogListing() {
  const blogPostsContainer = document.getElementById('blog-posts');
  if (!blogPostsContainer) return;

  // Sort posts by date (newest first)
  const sortedPosts = [...BLOG_POSTS].sort((a, b) => new Date(b.date) - new Date(a.date));

  // Render posts
  let html = '';
  sortedPosts.forEach(function(post) {
    const cardImgStyle = post.cardImageStyle ? ` style="${post.cardImageStyle}"` : '';
    html += `
      <article class="blog-card">
        <img src="${post.image}" alt="${post.title}" class="blog-card-image" loading="lazy"${cardImgStyle} onerror="this.src='/images/blog/placeholder.jpg'">
        <div class="blog-card-body">
          <p class="blog-card-date">${formatDate(post.date)}</p>
          <h2 class="blog-card-title">
            <a href="/blog/post.html?post=${post.slug}">${post.title}</a>
          </h2>
          <p class="blog-card-excerpt">${post.excerpt}</p>
          <a href="/blog/post.html?post=${post.slug}" class="blog-card-link">Continue Reading &rarr;</a>
        </div>
      </article>
    `;
  });

  blogPostsContainer.innerHTML = html;

  // Set up category filtering
  setupCategoryFiltering(sortedPosts);
}

function setupCategoryFiltering(posts) {
  const categoryLinks = document.querySelectorAll('.category-link');

  categoryLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      // Update active state
      categoryLinks.forEach(function(l) { l.classList.remove('active'); });
      this.classList.add('active');

      const category = this.dataset.category;
      const blogPostsContainer = document.getElementById('blog-posts');

      // Filter posts
      let filteredPosts = posts;
      if (category !== 'all') {
        filteredPosts = posts.filter(function(post) {
          return post.categories.includes(category);
        });
      }

      // Re-render
      if (filteredPosts.length === 0) {
        blogPostsContainer.innerHTML = '<p class="loading-message">No posts found in this category.</p>';
      } else {
        let html = '';
        filteredPosts.forEach(function(post) {
          const cardImgStyle = post.cardImageStyle ? ` style="${post.cardImageStyle}"` : '';
          html += `
            <article class="blog-card">
              <img src="${post.image}" alt="${post.title}" class="blog-card-image" loading="lazy"${cardImgStyle} onerror="this.src='/images/blog/placeholder.jpg'">
              <div class="blog-card-body">
                <p class="blog-card-date">${formatDate(post.date)}</p>
                <h2 class="blog-card-title">
                  <a href="/blog/post.html?post=${post.slug}">${post.title}</a>
                </h2>
                <p class="blog-card-excerpt">${post.excerpt}</p>
                <a href="/blog/post.html?post=${post.slug}" class="blog-card-link">Continue Reading &rarr;</a>
              </div>
            </article>
          `;
        });
        blogPostsContainer.innerHTML = html;
      }
    });
  });
}

// -----------------------------------------
// SINGLE POST PAGE
// -----------------------------------------

function renderSinglePost() {
  const postContent = document.getElementById('post-content');
  if (!postContent) return;

  // Get post slug from URL
  const urlParams = new URLSearchParams(window.location.search);
  const postSlug = urlParams.get('post');

  if (!postSlug) {
    postContent.innerHTML = '<p>Post not found. <a href="/blog/">Return to blog</a></p>';
    return;
  }

  // Find the post
  const post = BLOG_POSTS.find(function(p) { return p.slug === postSlug; });

  if (!post) {
    postContent.innerHTML = '<p>Post not found. <a href="/blog/">Return to blog</a></p>';
    return;
  }

  // Update page title
  document.title = post.title + ' | Intention Holistic Health';

  // Update meta description
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', post.excerpt);
  }

  // Render post header
  const postTitle = document.getElementById('post-title');
  if (postTitle) {
    postTitle.textContent = post.title;
  }

  const postMeta = document.getElementById('post-meta');
  if (postMeta) {
    postMeta.innerHTML = `
      <span class="post-date">${formatDate(post.date)}</span>
      <span class="post-author">By ${post.author}</span>
    `;
  }

  // Render featured image
  const postImage = document.getElementById('post-image');
  if (postImage) {
    const customStyle = post.imageStyle ? ` style="${post.imageStyle}"` : '';
    postImage.innerHTML = `<img src="${post.image}" alt="${post.title}" loading="lazy"${customStyle} onerror="this.parentElement.style.display='none'">`;
  }

  // Render content
  postContent.innerHTML = parseMarkdown(post.content);

  // Render tags
  const postTags = document.getElementById('post-tags');
  if (postTags && post.categories) {
    let tagsHtml = '';
    post.categories.forEach(function(category) {
      tagsHtml += `<span class="post-tag">${category}</span>`;
    });
    postTags.innerHTML = tagsHtml;
  }

  // Set up share buttons
  setupShareButtons(post);

  // Render related posts
  renderRelatedPosts(post);
}

function renderRelatedPosts(currentPost) {
  const relatedPostsGrid = document.querySelector('.related-posts-grid');
  if (!relatedPostsGrid) return;

  // Find posts with matching categories, excluding current post
  let relatedPosts = BLOG_POSTS.filter(function(post) {
    if (post.slug === currentPost.slug) return false;

    // Check if any categories match
    return post.categories.some(function(category) {
      return currentPost.categories.includes(category);
    });
  });

  // If not enough related posts, add other posts
  if (relatedPosts.length < 3) {
    const otherPosts = BLOG_POSTS.filter(function(post) {
      return post.slug !== currentPost.slug && !relatedPosts.includes(post);
    });
    relatedPosts = relatedPosts.concat(otherPosts);
  }

  // Limit to 3 posts
  relatedPosts = relatedPosts.slice(0, 3);

  // Render the related posts
  let html = '';
  relatedPosts.forEach(function(post) {
    html += `
      <a href="/blog/post.html?post=${post.slug}" class="related-post-card">
        <img src="${post.image}" alt="${post.title}" loading="lazy" onerror="this.src='/images/blog/placeholder.jpg'">
        <div class="related-post-card-body">
          <p class="related-post-card-title">${post.title}</p>
        </div>
      </a>
    `;
  });

  relatedPostsGrid.innerHTML = html;
}

function setupShareButtons(post) {
  const pageUrl = encodeURIComponent(window.location.href);
  const rawUrl = window.location.href;
  const pageTitle = encodeURIComponent(post.title);
  const rawTitle = post.title;

  // Copy Link button
  const copyLinkBtn = document.getElementById('copy-link');
  const copyConfirmation = document.getElementById('copy-confirmation');
  if (copyLinkBtn) {
    copyLinkBtn.addEventListener('click', function() {
      navigator.clipboard.writeText(rawUrl).then(function() {
        copyConfirmation.classList.add('show');
        setTimeout(function() {
          copyConfirmation.classList.remove('show');
        }, 2000);
      }).catch(function() {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = rawUrl;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        copyConfirmation.classList.add('show');
        setTimeout(function() {
          copyConfirmation.classList.remove('show');
        }, 2000);
      });
    });
  }

  // Email share
  const emailBtn = document.getElementById('share-email');
  if (emailBtn) {
    const emailSubject = encodeURIComponent('Check out this article: ' + rawTitle);
    const emailBody = encodeURIComponent('I thought you might find this helpful:\n\n' + rawTitle + '\n\n' + rawUrl);
    emailBtn.href = `mailto:?subject=${emailSubject}&body=${emailBody}`;
  }

  const facebookBtn = document.getElementById('share-facebook');
  if (facebookBtn) {
    facebookBtn.href = `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`;
  }

  const twitterBtn = document.getElementById('share-twitter');
  if (twitterBtn) {
    twitterBtn.href = `https://twitter.com/intent/tweet?url=${pageUrl}&text=${pageTitle}`;
  }

  const pinterestBtn = document.getElementById('share-pinterest');
  if (pinterestBtn) {
    const imageUrl = encodeURIComponent(window.location.origin + post.image);
    pinterestBtn.href = `https://pinterest.com/pin/create/button/?url=${pageUrl}&media=${imageUrl}&description=${pageTitle}`;
  }
}

// -----------------------------------------
// BLOG SEARCH
// -----------------------------------------

function setupBlogSearch() {
  const searchInput = document.getElementById('blog-search-input');
  const searchBtn = document.getElementById('blog-search-btn');
  const searchResults = document.getElementById('search-results');

  if (!searchInput || !searchBtn || !searchResults) return;

  // Search function
  function performSearch(query) {
    if (!query || query.trim().length < 2) {
      searchResults.style.display = 'none';
      return;
    }

    const searchTerms = query.toLowerCase().trim().split(/\s+/);
    const results = [];

    BLOG_POSTS.forEach(function(post) {
      // Search in title, excerpt, and content
      const searchableText = (post.title + ' ' + post.excerpt + ' ' + post.content).toLowerCase();

      // Check if all search terms are found
      const allTermsFound = searchTerms.every(function(term) {
        return searchableText.includes(term);
      });

      if (allTermsFound) {
        // Find the best matching excerpt
        const excerpt = findMatchingExcerpt(post.content, searchTerms);
        results.push({
          post: post,
          excerpt: excerpt
        });
      }
    });

    displaySearchResults(results, query);
  }

  // Find excerpt containing search terms with context
  function findMatchingExcerpt(content, terms) {
    // Strip markdown formatting
    const plainText = content
      .replace(/#{1,6}\s/g, '')
      .replace(/\*\*(.*?)\*\*/g, '$1')
      .replace(/\*(.*?)\*/g, '$1')
      .replace(/^\-\s/gm, '')
      .replace(/\n+/g, ' ')
      .trim();

    // Find the position of the first matching term
    let firstMatchPos = plainText.length;
    terms.forEach(function(term) {
      const pos = plainText.toLowerCase().indexOf(term);
      if (pos !== -1 && pos < firstMatchPos) {
        firstMatchPos = pos;
      }
    });

    // Get excerpt around the match (about 150 chars)
    const start = Math.max(0, firstMatchPos - 50);
    const end = Math.min(plainText.length, firstMatchPos + 100);
    let excerpt = plainText.substring(start, end);

    // Add ellipsis if needed
    if (start > 0) excerpt = '...' + excerpt;
    if (end < plainText.length) excerpt = excerpt + '...';

    return excerpt;
  }

  // Display search results
  function displaySearchResults(results, query) {
    searchResults.style.display = 'block';

    if (results.length === 0) {
      searchResults.innerHTML = '<p class="search-no-results">No articles found for "' + escapeHtml(query) + '"</p>' +
        '<button class="search-clear-btn" type="button">Clear Search</button>';
    } else {
      let html = '<p class="search-results-count">' + results.length + ' article' + (results.length === 1 ? '' : 's') + ' found</p>';

      results.forEach(function(result) {
        // Highlight search terms in the excerpt
        let highlightedExcerpt = escapeHtml(result.excerpt);
        query.toLowerCase().split(/\s+/).forEach(function(term) {
          if (term.length >= 2) {
            const regex = new RegExp('(' + escapeRegExp(term) + ')', 'gi');
            highlightedExcerpt = highlightedExcerpt.replace(regex, '<mark>$1</mark>');
          }
        });

        html += '<div class="search-result-item">' +
          '<a href="/blog/post.html?post=' + result.post.slug + '" class="search-result-title">' + escapeHtml(result.post.title) + '</a>' +
          '<p class="search-result-excerpt">' + highlightedExcerpt + '</p>' +
          '</div>';
      });

      html += '<button class="search-clear-btn" type="button">Clear Search</button>';
      searchResults.innerHTML = html;
    }

    // Add clear button listener
    const clearBtn = searchResults.querySelector('.search-clear-btn');
    if (clearBtn) {
      clearBtn.addEventListener('click', function() {
        searchInput.value = '';
        searchResults.style.display = 'none';
      });
    }
  }

  // Helper functions
  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  // Event listeners
  searchBtn.addEventListener('click', function() {
    performSearch(searchInput.value);
  });

  searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      performSearch(searchInput.value);
    }
  });

  // Live search with debounce (optional - search as you type)
  let searchTimeout;
  searchInput.addEventListener('input', function() {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(function() {
      if (searchInput.value.length >= 2) {
        performSearch(searchInput.value);
      } else if (searchInput.value.length === 0) {
        searchResults.style.display = 'none';
      }
    }, 300);
  });
}

// -----------------------------------------
// INITIALIZE
// -----------------------------------------

document.addEventListener('DOMContentLoaded', function() {
  // Check which page we're on and initialize accordingly
  if (document.getElementById('blog-posts')) {
    renderBlogListing();
    setupBlogSearch();
  } else if (document.getElementById('post-content')) {
    renderSinglePost();
  }
});
