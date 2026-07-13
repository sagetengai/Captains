import { useEffect, useMemo, useState } from 'react'
import { Check } from 'lucide-react'

import { GlassCard } from './GlassCard'

interface ProgressChecklistProps {
  items: string[]
  storageKey: string
}

export function ProgressChecklist({ items, storageKey }: ProgressChecklistProps) {
  const [completed, setCompleted] = useState<boolean[]>(() => items.map((_, index) => index === 0))

  useEffect(() => {
    const saved = window.localStorage.getItem(storageKey)

    if (!saved) {
      return
    }

    try {
      const parsed = JSON.parse(saved)

      if (Array.isArray(parsed)) {
        setCompleted(items.map((_, index) => Boolean(parsed[index])))
      }
    } catch {
      window.localStorage.removeItem(storageKey)
    }
  }, [items, storageKey])

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(completed))
  }, [completed, storageKey])

  const completeCount = useMemo(
    () => completed.filter(Boolean).length,
    [completed]
  )

  return (
    <GlassCard>
      <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
            Captain Progress
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-[-0.04em] text-white">
            {completeCount} / {items.length} Complete
          </h2>
        </div>

        <div className="h-2 w-full overflow-hidden rounded-full bg-white/10 sm:w-40">
          <div
            className="h-full rounded-full bg-[#FFB347] transition-all duration-300"
            style={{ width: `${(completeCount / items.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="grid gap-3">
        {items.map((item, index) => {
          const isComplete = completed[index]

          return (
            <button
              key={item}
              type="button"
              onClick={() =>
                setCompleted((current) =>
                  current.map((value, currentIndex) =>
                    currentIndex === index ? !value : value
                  )
                )
              }
              className="flex min-h-12 w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-left transition-all duration-200 hover:bg-white/[0.06]"
              aria-pressed={isComplete}
            >
              <span
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border ${
                  isComplete
                    ? 'border-[#FFB347] bg-[#FFB347] text-[#061426]'
                    : 'border-white/20 text-transparent'
                }`}
              >
                <Check size={15} strokeWidth={3} />
              </span>

              <span className={isComplete ? 'text-white' : 'text-white/70'}>
                {item}
              </span>
            </button>
          )
        })}
      </div>
    </GlassCard>
  )
}
